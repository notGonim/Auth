//Check if user is authenticated or not 

import { ErrorHandler } from "../utils/errorHandler";
import { asyncError } from "./catchAsyncErrors";
import jwt from 'jsonwebtoken'
import User from "../models/user_model.js";


//To be added to the route to authorize if u have the authority to access that route or not 
export const isAuthenticated = asyncError(async (req, res, next) => {
    //so we access the token from the cookie 
    const { token } = req.cookies
    //if token doesnt exists 
    if (!token)
        return next(new ErrorHandler('LogIn first to access that resource', 401))
    //To verify our user  
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decode.id)
    next()
})



