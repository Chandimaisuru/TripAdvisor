
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express ()
const port = process.env.PORT || 8000

// for testing

// app.get('/',(req,res)=>{
//     res.send('api is working');
// })

//database connection

const connect = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedToplogy :true
       }) 
    } catch (error) {
        
    }
}

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.listen(port,()=>{
    console.log('server listening on port', port);
})

