import express from 'express'
import { registerUser, loginUser } from '../controllers/user_controller.js'


export const UserRouter = express.Router()

//route to sign up user 
UserRouter.post('/signup', registerUser)
//route to login user 
UserRouter.post('/login', loginUser)
