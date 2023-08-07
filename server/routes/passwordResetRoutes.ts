import express from 'express';
import { changePassword, resetVerifyEmail } from '../controllers/passwordReset';

const router = express.Router();

router.post("/", resetVerifyEmail);
router.post("/:id/reset/:token", changePassword)

export default router;