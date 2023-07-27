import pkg from 'pg'
import dotenv from "dotenv";

dotenv.config()

const {Pool} = pkg

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
});
  
pool.connect((err)=>{
    if(err) throw err
    console.log("Database connected")
})

export default {
    query:(text,params)=>pool.query(text,params)
}