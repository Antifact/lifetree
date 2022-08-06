const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/posts-routes');

const PORT = 4000;

const dbConnection = "mongodb://localhost/lifetree_db"

const app = express();

mongoose.connect(dbConnection, 
  {},
  err => {
    if (err){
      console.log(e, "Database error");
    } else {
      console.log("Connected to DB!")
    }
  });

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);

app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}...`)});