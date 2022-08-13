// import express
const express = require('express');

// import functions from the controller required for the user
const { getUsers, registerUser, loginUser } = require('../controllers/user-controller');

// import router from express
const router = express.Router();

router.route('/').post(registerUser);

// retrieve / GET all users from the api
router.get('/', getUsers);

// send a post request to register a user
router.post('/', registerUser);

// send a post request to login a user
router.post('/login', loginUser);

module.exports = router;