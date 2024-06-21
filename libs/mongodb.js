import mongoose from "mongoose"; 

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MongoDB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;

https://cloud.mongodb.com/v2/667099538f9e7d0eb7deb28d#/security/network