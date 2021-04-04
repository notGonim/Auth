export const errors = (err, req, res, next) => {

    // 500 is the internal server statusCode 
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Message'


    // if i am on the development mode the gunna display the stack message to help me figure out what went wrong 
    if (process.env.NODE_ENV === "DEVELOPMENT") {
        res.status(err.statusCode).json(
            {
                success: false,
                error: err,
                errMessage: err.message,
                stack: err.stack
            }
        )
    }


    // if i am on the production mode 
    if (process.env.NODE_ENV === "PRODUCTION") {

        const error = { ...err }
        error.message = err.message




              //wrong mongoose object ID error   means if i have an Invalid ID 
              if (err.name === 'CastError') {
                const message = `Resources not found . Invalid : ${err.path}`
                error = new ErrorHandler(message, 400)
            }
    
            //handle mongoose validation error  if you forget to write down the properties needed 
            if (err.name === 'ValidationError') {
                const message = Object.values(err.errors).map(val => val.message)
                error = new ErrorHandler(message, 400)
            }
    
            //handle mongoose duplicate error 
            if (err.code === 11000) {
                const message = `Duplicate ${Object.keys(err.keyValue)} entered`
                error = new ErrorHandler(message, 400)
            }
    

        res.status(error.statusCode).json(
            {
                success: false,
                message: error.message || 'Internal Server Error',

            }
        )
    }




}