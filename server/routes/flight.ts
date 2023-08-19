import express from 'express'
import { createFlight, deleteFlight, getFlight, getAllFlights, getUserFlights, updateFlight } from '../controllers/flight';
import { verifyAdmin, verifyToken, verifyUser } from '../middlewares/verifyToken';

const router = express.Router();


//CREATE
router.post('/',verifyAdmin, createFlight)

//GET ALL
router.get('/', getAllFlights)

// GET MY ACCOMMODATIONS I ADDED
router.get('/:user_id/mine',verifyUser, getUserFlights);

//GET
router.get('/:id', getFlight);

//PATCH
router.patch('/:id', verifyAdmin, updateFlight);

//DELETE
router.delete('/:id', verifyAdmin, deleteFlight);

export default router;