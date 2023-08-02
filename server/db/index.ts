import pkg from 'pg'
import dotenv from "dotenv";


dotenv.config()

const {Pool} = pkg

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require"
});
  
pool.connect((err)=>{
    if(err) throw err
    console.log("Database connected")
})

export default {
    query:(text:string,params?:any[])=>pool.query(text,params)
}