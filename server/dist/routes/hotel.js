"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hotel_1 = require("../controllers/hotel");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = express_1.default.Router();
//CREATE
router.post('/', verifyToken_1.verifyAdmin, hotel_1.createHotel);
//GET ALL
router.get('/', hotel_1.getAllHotels);
// GET MY ACCOMMODATIONS I ADDED
router.get('/:user_id/mine', verifyToken_1.verifyUser, hotel_1.getUserHotels);
//GET
router.get('/:id', hotel_1.getHotel);
//PATCH
router.patch('/:id', verifyToken_1.verifyAdmin, hotel_1.updateHotel);
//DELETE
router.delete('/:id', verifyToken_1.verifyAdmin, hotel_1.deleteHotel);
exports.default = router;
