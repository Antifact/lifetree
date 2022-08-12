// import express for running server
const express = require('express');

// define the app by using express
const app = express(); 

// import mongoose to connect to database
const mongoose = require('mongoose');

// import the app's routes from the respective file
const postRoutes = require('./routes/postRoutes');

// middleware for logging requests and send response.
// invoke next() to continue with requests/responses
app.use(express.json());

app.use( (req, res, next) => {
  console.log(req.path, res.method);
  next();
})

// import dotenv to use global process variables instead 
// of hardcoding URLs etc.
const dotenv = require('dotenv');

dotenv.config();

// express routes to receive data
app.use('/posts', postRoutes);

// connect to mongodb
mongoose.connect(process.env.DB_URI)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  })


// use port specified in dotenv file, otherwise use 4000
const PORT = process.env.PORT || 4000;

// make the express app ready to receive requests
app.listen(PORT, console.log(`Server started on ${PORT} and connected to DB!`));