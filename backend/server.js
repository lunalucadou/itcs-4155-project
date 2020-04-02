// Pull in the required
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Can save configurations in the dotenv file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;





// Middleware
app.use(cors());
app.use(express.json()); // Allows server to parse JSON





// Set up the connection to MongoDB Atlas using Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongoose database connection established succesfully!");
});





//Set up the routes
///*
// app.use(require('./routes'))
//*/
// const mainRouter = require('./routes/index')
// app.use('/', mainRouter);
//
const homeRouter = require('./routes/home');
app.use('/', homeRouter);
const accesspointRouter = require('./routes/accesspoint');
app.use('/accesspoint', accesspointRouter);





// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
