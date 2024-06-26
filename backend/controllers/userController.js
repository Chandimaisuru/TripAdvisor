import User from "../models/User.js";

// create new user

export const createUser = async (req,res) =>{
    const newUser = new User(req.body);

    try {
        const savedUser =await newUser.save();
        res.status(200).json({success:true,message:"Successfully Created",data:savedUser})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to created.Try again"})
    }
}

// update User
export const updateUser = async (req,res) =>{

    const id = req.params.id;

   try {
     const updatedUser = await User.findByIdAndUpdate(
        id,
        {
            $set:req.body,
        },
        {new:true}
     );
     res.status(200).json({success:true,message:"Successfully Updated",data:updatedUser})

   } catch (error) {
    res.status(500).json({success:false,message:"Failed to update.Try again"})
   }
}  


// delete User
export const deleteUser = async (req,res) =>{
    
    const id = req.params.id;

    try {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json({success:true,message:"Successfully Deleted"})
 
    } catch (error) {
     res.status(500).json({success:false,message:"Failed to delete.Try again"})
    }
 }  


 // getsingle User
export const getSingleUser = async (req,res) =>{
    
    const id = req.params.id;

    try {
      const user = await User.findById(id);
      res.status(200).json({success:true,message:"Successfully",data:user})
 
    } catch (error) {
     res.status(500).json({success:false,message:"Failed to search.Try again"})
    }
 }  

 // getAll User
  export const getAllUser = async (req,res) =>{


    try {
        const user = await User.find({})
      
        res.status(200).json({success:true,message:"Successfully",data:user})
   
      } catch (error) {
       res.status(500).json({success:false,message:"Failed to search.Try again"})
      }
  }  