
import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()



// update new tour
router.put('/:id',verifyUser,updateUser)

// delete new tour
router.delete('/:id',verifyUser,deleteUser)

// get single tour
router.get('/:id',verifyUser,getSingleUser)

// get all tour
router.get('/',verifyAdmin,getAllUser)

export default router;