
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"

import tourRoute from "./routes/tour.js"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import reviewRoute from "./routes/review.js"

dotenv.config()
const app = express ()
const port = process.env.PORT || 8000 ;
const corsOptions ={
    origin:true,
    Credentials:true
}

// for testing

// app.get('/',(req,res)=>{
//     res.send('api is working');
// })

//database connection
mongoose.set("strictQuery",false);
const connect = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology :true
       });
       console.log("MongoDb Connected")
    } catch (error) {
        console.log("MongoDb Connection failed !")
    }
}

//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/api/v1/tour",tourRoute)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/review",reviewRoute)

app.listen(port,()=>{
    connect();
    console.log('server listening on port', port);
})

