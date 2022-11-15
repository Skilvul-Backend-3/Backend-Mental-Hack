const { default: mongoose, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    // trim: true,
    // minLength: 4,
    // maxLength: 20,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema)

module.exports = User
