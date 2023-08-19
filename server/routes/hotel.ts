import express from 'express'
import { createHotel, deleteHotel, getHotel, getAllHotels, getUserHotels, updateHotel } from '../controllers/hotel';
import { verifyAdmin, verifyToken, verifyUser } from '../middlewares/verifyToken';

const router = express.Router();


//CREATE
router.post('/',verifyAdmin, createHotel)

//GET ALL
router.get('/', getAllHotels)

// GET MY ACCOMMODATIONS I ADDED
router.get('/:user_id/mine',verifyUser, getUserHotels);

//GET
router.get('/:id', getHotel);

//PATCH
router.patch('/:id', verifyAdmin, updateHotel);

//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

export default router;