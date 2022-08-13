// imports. bcrypt for hashing the passwords.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// user schema for database. requires a username, email and password to be entered
// also posts timestamps for when posts are created via mongoose.
// has an admin boolean too for users that had admin privileges in the front end
// but i could not get them to work.
// initially it was required and defaulted to false, but i couldn't think of a good
// way to check if a user was admin using the localstorage.
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    admin: {
      type: Boolean,
      required: false,
    },
  },

    {
      timestamps: true
    }
  );

  userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
      next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  const User = mongoose.model('User', userSchema);

  module.exports = User;