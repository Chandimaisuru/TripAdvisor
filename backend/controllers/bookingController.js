 
 import Booking from "../models/Booking.js"


 // create new booking
 export const createBooking = async(req,res)=>{

    const newBooking = new Booking(req.body)  

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true,message:"Your Tour is Booked",data:savedBooking})
        
    } catch (error) {
        res.status(500).json({success:false,message:"failed to booking"})
    }
}

// get single booking
export const getBooking = async(req,res)=>{
     
       const id = req.params.id;
    try {
        const book =await Booking.findById(id);
        res.status(200).json({success:true,message:"Succesfully",data:book})
    } catch (error) {
        res.status(500).json({success:false,message:"not found"})
    }
}


// get all booking
export const getAllBooking = async(req,res)=>{
     
   
 try {
     const books =await Booking.find();
     res.status(200).json({success:true,message:"Succesfully",data:books})
 } catch (error) {
     res.status(500).json({success:false,message:"not found"})
 }
}