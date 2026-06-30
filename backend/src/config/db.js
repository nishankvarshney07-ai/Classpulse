const mongoose = require('mongoose');
require('dotenv').config(); // This explicitly loads your .env file

const connectDB = async () => {
    try {
        // We use the MONGO_URI variable you just created!
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully to ClassPulse!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        // This stops the server from running if the database fails to connect
        process.exit(1); 
    }
};

module.exports = connectDB;