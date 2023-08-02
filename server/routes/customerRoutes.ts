import express from 'express'
import { login, logout, register, verifyEmail } from '../controllers/customersAuth';
import { verifyUser } from '../middlewares/verifyToken';
import { refreshAccessToken } from '../utils/auth'; 

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout',verifyUser, logout)
router.get('/:id/verify/:token', verifyEmail)

router.post('/refresh-token', refreshAccessToken);


export default router