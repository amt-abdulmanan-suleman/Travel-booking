import express from 'express'
import { register } from '../controllers/customersAuth';

const router = express.Router();

router.post("/signup",register);

export default router