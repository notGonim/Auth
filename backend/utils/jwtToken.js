//Create and send Token then Save it in the Cookie. 
export const sendToken = (user, statusCode, res) => {

    //Create Jwt Token 
    const token = user.getJwtToken()

    //Options for Cookie 
    const options = {
        expire: new Date(Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000),
        //httpOnly coz now its cant be access via JS code in the frontend 
        httpOnly: true
    }
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}