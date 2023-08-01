import pkg from 'pg'
import dotenv from "dotenv";
import { DB_PORT } from '../config';

dotenv.config()

const {Pool} = pkg

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: Number(DB_PORT),
});
  
pool.connect((err)=>{
    if(err) throw err
    console.log("Database connected")
})

export default {
    query:(text:string,params?:any[])=>pool.query(text,params)
}