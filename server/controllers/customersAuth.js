import db from '../db/index';
import {compare, hash} from 'bcrypt'
import jwt from 'jsonwebtoken';


export const register = async(req, res) =>{

    const {fullname, email, password} = req.body;

    try {
        const hashedPassword = await hash(password, 10);
        await db.query("insert into customers (fullname, email, password) values ($1, $2, $3)", [fullname, email, hashedPassword])

        res.status(200).json({
            success: true,
            message: 'Signup successful'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "signup failed. Try again"
        })
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
        }).status(200).json({success:true, message:'logged in', data:{id,fullname,email,phonenumber,address}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: 'Login failed'})
    }
}