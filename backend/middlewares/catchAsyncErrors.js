// this file is to catch the async errors 

export const asyncError = func => (req, res, next) => {
    Promise.resolve(func(req, res, next))
        .catch(next)
}