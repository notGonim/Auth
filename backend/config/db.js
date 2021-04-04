import mongoose from 'mongoose'


export const connectDB = async () => {
    await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    });
    console.log("Databases Connected");
};