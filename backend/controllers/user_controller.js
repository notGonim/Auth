import { asyncError } from "../middlewares/catchAsyncErrors.js"
import User from "../models/user_model.js"
import { ErrorHandler } from "../utils/errorHandler.js"



//register user   ===>   /api/signup 
export const registerUser = asyncError(async (req, res, next) => {

    const { name, email, password } = req.body
    const user = await User.create({
        name, email, password
    })
    //assign token to the user 
    const token = user.getJwtToken()
    res.status(201).json({
        success: true,
        token
    })
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
    const user = User.findOne({ email }).select('+password')

    //check if user enter a valid data 
    if (!user)
        return next(new ErrorHandler('Please enter valid data', 401))

    //check if password match 
    const isPasswordMatch = await user.comparePassword(password)
    if (!isPasswordMatch)
        return next(new ErrorHandler('Password is not valid', 401))

    const token = user.getJwtToken()
    res.status(201).json({
        success: true,
        token
    })
})