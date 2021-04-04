import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import { errors } from './middlewares/errors.js'
import { UserRouter } from './routes/user_route.js'




export const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())





//to handle all the routes that related user 
app.use('/api', UserRouter)



//middleware to handle all errors 
app.use(errors)
