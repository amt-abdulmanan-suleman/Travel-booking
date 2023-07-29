import express from 'express'
import { login, logout, register, verifyEmail } from '../controllers/customersAuth';
import { verifyUser } from '../middlewares/verifyToken';

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout',verifyUser, logout)
router.get('/:id/verify/:token', verifyEmail)

export default router