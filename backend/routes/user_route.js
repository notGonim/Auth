import express from 'express'
import { registerUser, loginUser, logOut } from '../controllers/user_controller.js'


export const UserRouter = express.Router()

UserRouter.post('/signup', registerUser)
UserRouter.post('/login', loginUser)
UserRouter.get('/logout', logOut)