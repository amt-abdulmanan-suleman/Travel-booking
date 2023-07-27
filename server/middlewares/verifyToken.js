import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {
    const {accessToken} = req.cookies;

    if (!accessToken){
        return res.status(401).json({success: false, message: 'Unauthorized'})
    }

    jwt.verify(accessToken, process.env.SECRET, (err, user)=>{
        if (err) throw new Error

        req.user = user;
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, ()=>{
        if (req.user.id === req.params.id){
            next()
        }else{
           return res.status(401).json({success: false, message: 'Not authenticated'})
        }
    })
}