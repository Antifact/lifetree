// import express for running server
const express = require('express');

// define the app by using express
const app = express();

// import mongoose to connect to database
const mongoose = require('mongoose');

const dotenv = require('dotenv');

// import the app's routes from the respective file
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// middleware for logging requests and send response.
// invoke next() to continue with requests/responses
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('api running')
});

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('/posts/:id', (req, res) => {
  const post = posts.find((p) => p._id === req.params.id);
  res.send(post);
});

// connect to mongodb
mongoose.connect(process.env.DB_URI)
  .then(() => {})
  .catch((error) => {
    console.log(error);
});

// use port specified in dotenv file, otherwise use 4000
const PORT = process.env.PORT || 4000;

// make the express app ready to receive requests
app.listen(process.env.PORT, () => { console.log(`Server started on ${PORT} and connected to DB!`)
});