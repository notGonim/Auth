import express from 'express'
import { registerUser,loginUser } from '../controllers/user_controller.js'


export const UserRouter = express.Router()

UserRouter.post('/signup', registerUser)
UserRouter.post('/login', loginUser)
