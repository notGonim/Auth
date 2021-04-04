import express from 'express'
import { registerUser } from '../controllers/user_controller'


export const UserRouter = express.Router()


UserRouter.post('/api/signup', registerUser)
