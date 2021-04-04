// this is is a global handler for the async errors i could use the try catch way but this is much better way to  handle async errors 

export const asyncError = func => (req, res, next) => {
    Promise.resolve(func(req, res, next))
        .catch(next)
}