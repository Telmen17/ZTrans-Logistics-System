const path = require('path')
const express = require('express');
const colors = require("colors");
const dotenv = require('dotenv').config({path: '../.env'});
const cors = require('cors')
const {errorHandler} =require('./middleware/errorMiddleware');
// Import your database connection module
const connectDB = require('./config/db');
//const userRoutes = require('./routes/userRoutes'); // Import the user routes
const port = process.env.PORT || 5000;

connectDB(); // Connect to the database

const app = express();
app.use(cors())

//TODO: Youtube tutorial code
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({extended: false}));

// Use the user routes
app.use('/api/users', require('./routes/userRoutes'));
//Using the goals routes
app.use('/api/goals', require('./routes/goalRoutes'));

//Serve frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));


console.log(process.env.PORT)