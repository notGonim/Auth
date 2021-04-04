//error handler class 

export class ErrorHandler extends Error {

    constructor(message, statusCode) {
        // super here is representing the Error class constructor  
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}


