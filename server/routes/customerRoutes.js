import express from 'express'
import { login, logout, register, verifyEmail } from '../controllers/customersAuth.js';
import { verifyUser } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout',verifyUser, logout)
router.get('/:id/verify/:token', verifyEmail)

export default router