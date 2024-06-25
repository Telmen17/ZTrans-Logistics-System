const express = require('express');
const dotenv = require('dotenv').config();
//const connectDB = require('./config/db'); // Import your database connection module
//const userRoutes = require('./routes/userRoutes'); // Import the user routes
const port = process.env.PORT || 5000;
//connectDB(); // Connect to the database

const app = express();

//TODO: Youtube tutorial code
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/userRoutes')); // Use the user routes

app.listen(port, () => console.log(`Server running on port ${port}`));