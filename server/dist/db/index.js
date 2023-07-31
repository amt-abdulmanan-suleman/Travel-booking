"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("../config");
dotenv_1.default.config();
const { Pool } = pg_1.default;
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: Number(config_1.DB_PORT),
});
pool.connect((err) => {
    if (err)
        throw err;
    console.log("Database connected");
});
exports.default = {
    query: (text, params) => pool.query(text, params)
};
