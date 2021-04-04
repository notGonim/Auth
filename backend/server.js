import { connectDB } from "./config/db.js";
import dotEnv from 'dotenv'
import { app } from "./app.js";







//add the port that server will run on which is going to be 5000
const port = process.env.PORT || 5000 

//handle uncaught exceptions 
process.on('uncaughtException',err=>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})




//setting up config file 
dotEnv.config({ path: './config/config.env' })




// connecting to the database
connectDB()



//make server run on port 5000
const server = app.listen(port, () => {
    console.log(`server is running on : ${port} in development `)
})


//handle the unhandled promise rejections 
process.on('unhandledRejection', err => {
    server.close(() => {
        process.exit(1)
    })
})