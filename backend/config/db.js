const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGO_URI = "mongodb+srv://telmen7948:6ccojXVyeUVAQSMN@ztranscluster.aaykjbi.mongodb.net/?retryWrites=true&w=majority&appName=ZTransCluster";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;