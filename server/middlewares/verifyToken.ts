import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

interface User {
    id: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: () => void): void => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
        res.status(401).json({ success: false, message: 'Unauthorized' });
        return;
    }

    jwt.verify(accessToken, process.env.SECRET as string, (err:any, user:any) => {
        if (err) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }else{
            req.user = user as User;
            next();
        }
    });
};


export const verifyUser = (req:Request, res: Response, next: () => void): void => {
    verifyToken(req, res, next); 
    if (req.user?.id === req.params.id) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Not authenticated' });
    }
};
