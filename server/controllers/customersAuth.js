import db from '../db/index.js';
import {compare, hash} from 'bcrypt'
import jwt from 'jsonwebtoken';
import {sendEmail} from '../utils/email.js'
import crypto from 'crypto'


export const register = async(req, res) =>{

    const {fullname, email, password} = req.body;

    try {
        const hashedPassword = await hash(password, 10);
        const token = crypto.randomBytes(32).toString('hex')
        const {rows} = await db.query("insert into customers (fullname, email, password) values ($1, $2, $3) returning *", [fullname, email, hashedPassword])
        await db.query("insert into verification_tokens (customerId, token) values ($1, $2)",[rows[0].id, token]);

        const url = `${process.env.BASE_URL}/customer-auth/${rows[0].id}/verify/${token}`

        await sendEmail(rows[0].email, "Verify Email", url)
        res.status(200).json({
            success: true,
            message: 'email sent to your account, please verify'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "signup failed. Try again"
        })
    }
}

export const verifyEmail = async(req, res) =>{
    const {id, token} = req.params;
    try {
        const {rows} = await db.query('select * from customers where id=$1',[id]);

        if(!rows[0]) return res.status(400).send({message: "Invalid link"});

        const results = await db.query('select * from verification_tokens where customerId=$1',[rows[0].id])
        if(!results.rows[0]) return res.status(400).send({message: "Invalid link"});

        await db.query("UPDATE customers SET verified = true WHERE id = $1", [rows[0].id])
        await db.query("DELETE FROM verification_tokens WHERE customerId=$1",[rows[0].id])

        res.status(200).json({success:true,message: 'Email verified'})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: 'Email not verified'})
    }
}

export const login = async(req, res) =>{
    const {email, password} = req.body;

    try {
        const {rows} = await db.query('select * from customers where email=$1',[email]);

        if(!rows[0]){
            return res.status(404).json({
                success: false,
                message: "user doesn't exist"
            })
        }
        // check if password is correct
        const isCorrectPassword = await compare(password, rows[0].password);

        if(!isCorrectPassword){
            return res.status(401).json({success:false, message: "Wrong password"})
        }

        const {id,fullname,phonenumber,address} = rows[0];

        // create token
        const token = jwt.sign(
            {id: id, fullname: fullname},
            process.env.SECRET,
            {expiresIn: "12d"}
        )
        //set and send cookies to browser and client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({success:true, token, data:{id,fullname,email,phonenumber,address}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: 'Login failed'})
    }
}

export const logout =async (req, res) => {
    // Clear the access token cookie
    res.clearCookie('accessToken', { httpOnly: true });

    // Respond with a success message
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  };