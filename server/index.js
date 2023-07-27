import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './db/index.js';
import customerRouter from './routes/customerRoutes.js'

dotenv.config()
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser());


//routes
app.use("/customer-auth",customerRouter)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})