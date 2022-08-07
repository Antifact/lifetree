const asyncHandler = require('express-async-handler');
const User = require('../models/user');

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
      username: username.name,
      email: user.email,
      admin: user.admin
    });
  } else {
    res.status(400)
    throw new Error('Error!')
  };
});

const loginUser = asyncHandler( async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin
    });
  } else {
    res.status(400);
    throw new Error('Invalid username or password!')
  }
});

module.exports = { registerUser, loginUser };