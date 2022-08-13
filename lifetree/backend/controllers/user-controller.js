// imports
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const genToken = require('../utils/genToken');

// function for getting Users. this was going to be for admin panel 
// to list, delete and edit all users.
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1});

  res.status(200).json(users);
};

// the register user function. takes the username, email and password
// checks to see if the user exists, and if so, throws an error.
// posts the user to the database using json.
const registerUser = asyncHandler( async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400)
    throw new Error('User exists!')
  }

  const user = await User.create({
    username,
    email,
    password
  });

  if(user) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
      token: genToken(user.id)
    });
  } else {
    res.status(400)
    throw new Error('Error!')
  };
});

// login user function. checks to see if the user exists by finding username
// makes sure the passwords match from the request and in the database.
// responds with the id, username, email, admin and token if the user exists.
// if not, send an error saying invaild username or password.
const loginUser = asyncHandler( async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
      token: genToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid username or password!');
  }
});

// export the functions
module.exports = { getUsers, registerUser, loginUser };