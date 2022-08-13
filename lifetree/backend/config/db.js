// import mongoose
const mongoose = require('mongoose');

// this was a function i used to connect to the mongoose database, but i ended up 
// just using a function in the app.js
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;