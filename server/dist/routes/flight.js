"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flight_1 = require("../controllers/flight");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = express_1.default.Router();
//CREATE
router.post('/', verifyToken_1.verifyAdmin, flight_1.createFlight);
//GET ALL
router.get('/', flight_1.getAllFlights);
// GET MY ACCOMMODATIONS I ADDED
router.get('/:user_id/mine', verifyToken_1.verifyUser, flight_1.getUserFlights);
//GET
router.get('/:id', flight_1.getFlight);
//PATCH
router.patch('/:id', verifyToken_1.verifyAdmin, flight_1.updateFlight);
//DELETE
router.delete('/:id', verifyToken_1.verifyAdmin, flight_1.deleteFlight);
exports.default = router;
