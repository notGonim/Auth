import { asyncError } from "../middlewares/catchAsyncErrors.js"
import User from "../models/user_model.js"
import { ErrorHandler } from "../utils/errorHandler.js"
import { sendToken } from "../utils/jwtToken.js"
import { sendEmail } from "../utils/sendEmail.js"



//register user   ===>   /api/signup 
export const registerUser = asyncError(async (req, res, next) => {

    const { name, email, password } = req.body
    const user = await User.create({
        name, email, password
    })
    //assign token to the user 
    sendToken(user, 200, res)
})


//Login user  ===> /api/login
export const loginUser = asyncError(async (req, res, next) => {

    const { email, password } = req.body
    //check if user enter his email and password 
    if (!email || !password)
        return next(new ErrorHandler('Please enter your email and password', 400))

    //Finding user in databases  
    /*  Here i search for the user and then select the email and password 
    .select coz in the user model i specified the select to be false coz 
    i don`t want to get that password  while fetching the user  */
    const user = await User.findOne({ email }).select('+password')

    //check if user enter a valid data 
    if (!user)
        return next(new ErrorHandler('Please enter valid data', 401))

    //check if password match 
    const isPasswordMatch = await user.comparePassword(password)
    if (!isPasswordMatch)
        return next(new ErrorHandler('Password is not valid', 401))
    //sending token 
    sendToken(user, 200, res)
})

//Forget password  ==> /api/password/forgot
export const resetPassword = asyncError(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email })

    //check if user`s email exists 
    if (!user)
        return next(new ErrorHandler('Email Not Exists', 401))

    //get reset Token 
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    //Create reset password url 
    const resetUrl = `${req.protocol}://${req.get('host')}/api/password/reset/${resetToken}`
    const message = `Your password reset token is as follow :\n\n${resetUrl}\n\n If you have not requested this email Ignore it `


    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })
    } catch (err) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(err.message, 500))
    }

})



//Logout user   ===> /api/logout 
export const logOut = asyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'User Logged Out'
    })
})