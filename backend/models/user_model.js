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
        },
        role: {
            type: String,
            default: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date
    }
)


//Encrypting user`s password before saving user 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)

})



// Return JWT token 
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN
    })
}

//compare password the one that user entered and the other one that saved on our databases 
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


const User = mongoose.model('Users', userSchema)
export default User