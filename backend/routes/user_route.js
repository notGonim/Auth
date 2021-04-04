import express from 'express'
import { registerUser } from '../controllers/user_controller.js'


export const UserRouter = express.Router()


UserRouter.post('/signup', registerUser)
