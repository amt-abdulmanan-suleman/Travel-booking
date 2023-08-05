import express from 'express'
import { createAccomodation, deleteAccomodation, getAccomodation, getAllAccomodation, updateAccomodation } from '../controllers/accomodation';
import { verifyAdmin, verifyToken } from '../middlewares/verifyToken';

const router = express.Router();


//CREATE
router.post('/',verifyAdmin, createAccomodation)

//GET ALL
router.get('/', getAllAccomodation)

//GET
router.get('/:id', getAccomodation)

//PATCH
router.patch('/:id', verifyAdmin, updateAccomodation)

//DELETE
router.delete('/:id', verifyAdmin, deleteAccomodation)

export default router;