const { default: mongoose, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Why no bacon?'],
  },
  email: {
    type: String,
    required: [true, 'Why no bacon?'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Why no bacon?'],
    // trim: true,
    // minLength: 4,
    // maxLength: 20,
  },
  role: {
    type: String,
    required: [true, 'Why no bacon?'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
