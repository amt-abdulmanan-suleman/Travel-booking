"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFlight = exports.updateFlight = exports.getUserFlights = exports.getFlight = exports.getAllFlights = exports.createFlight = void 0;
const db_1 = __importDefault(require("../db"));
const createFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const columns = Object.keys(req.body).join(', ');
        const placeholders = Object.keys(req.body).map((_, index) => `$${index + 1}`).join(', ');
        const insertQuery = `INSERT INTO flights (${columns}) VALUES (${placeholders}) RETURNING *`;
        const values = Object.values(req.body);
        const { rows } = yield db_1.default.query(insertQuery, values);
        res.json({ success: true, message: 'Flight created successfully.', data: rows[0] });
    }
    catch (err) {
        console.error('Error adding accommodation:', err);
        res.status(500).json({ error: 'An error occurred while creating new flight.' });
    }
});
exports.createFlight = createFlight;
const getAllFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: flights } = yield db_1.default.query('select * from flights');
        res.status(200).json({ success: true, data: flights });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
exports.getAllFlights = getAllFlights;
const getFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { rows: flight } = yield db_1.default.query('select * from flights where id=$1', [id]);
        res.status(200).json({ success: true, data: flight[0] });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});
exports.getFlight = getFlight;
const getUserFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    try {
        const { rows: flight } = yield db_1.default.query('select * from flights where business_id=$1', [user_id]);
        res.status(200).json({ success: true, data: flight });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});
exports.getUserFlights = getUserFlights;
const updateFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updateColumns = Object.keys(updates).map((key, index) => {
            return `${key} = $${index + 1}`;
        }).join(', ');
        const updateValues = Object.values(updates);
        const updateQuery = `UPDATE flights SET ${updateColumns} WHERE id = $${updateValues.length + 1} RETURNING *`;
        const values = [...updateValues, id];
        const { rows: updatedFlight } = yield db_1.default.query(updateQuery, values);
        res.status(200).json({ success: true, message: 'flight updated successfully.', data: updatedFlight[0] });
    }
    catch (err) {
        console.error('Error updating flight info:', err);
        res.status(500).json({ success: false, message: 'An error occurred while updating flight info.' });
    }
});
exports.updateFlight = updateFlight;
const deleteFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield db_1.default.query('delete from flights where id=$1', [id]);
        res.status(200).json({ success: true, message: 'item deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
exports.deleteFlight = deleteFlight;
