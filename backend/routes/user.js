
import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'

const router = express.Router()



// update new tour
router.put('/:id',updateUser)

// delete new tour
router.delete('/:id',deleteUser)

// get single tour
router.get('/:id',getSingleUser)

// get all tour
router.get('/',getAllUser)

export default router;