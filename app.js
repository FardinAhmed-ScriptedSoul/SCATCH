// Load environment variables FIRST (before any other code)
require('dotenv').config();

const express = require('express');
const app = express();

// Import the database connection function
const connectDB = require('./config/db.config');

// Connect to database
connectDB();

const cookieParser = require('cookie-parser');
const path = require("path");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ Fixed: added parentheses
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//routing
app.use("/owners",ownerRouter);
app.use("/users",userRouter);
app.use("/products",productsRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});