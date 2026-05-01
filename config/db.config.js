// config/db.config.js
// Load environment variables (if not already loaded)
require('dotenv').config();

const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/scatch")
//   .then(function() {
//     console.log("Connected to MongoDB successfully");
//   })
//   .catch(function(err) {
//     console.log("MongoDB connection error:", err);
//   });






const connectDB = async () => {
  try {
    
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds
      family: 4 // Use IPv4, skip trying IPv6
    };

    const dbURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/scatch";
    
    const conn = await mongoose.connect(dbURI, options);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📁 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected');
    });

  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;