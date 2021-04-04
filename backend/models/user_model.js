import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
import crypto from 'crypto'



const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter Your Name'],
            maxLength: [30, 'Your name should not exceed 30 characters']
        },
        email: {
            type: String,
            required: [true, 'Please Enter Your Email'],
            unique: true,
            validate: [validator.isEmail, 'Please Enter a Valid email']
        },
        password: {
            type: String,
            required: [true, 'Please Enter Your Password'],
            minlength: [6, 'Your password must be longer than 6 characters'],
            select: false
        }
    }
)

const User = mongoose.model('Users', userSchema)
export default User