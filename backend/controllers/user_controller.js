import { asyncError } from "../middlewares/catchAsyncErrors.js"
import User from "../models/user_model.js"



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