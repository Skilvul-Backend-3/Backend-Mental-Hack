const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  Register: async (req, res) => {},
  Login: async (req, res) => {
    try {
      // get body
      const { email, password } = req.body;
      // findone
      const userData = await User.findOne({ email }).exec();
      // if not found
      if (userData === null) {
        res.status(404).json({ msg: 'User tidak ditemukan' });
      }
      // compare password
      const match = bcrypt.compareSync(password, userData.password); // true
      if (!match) return res.status(400).json({ msg: 'Wrong Password' });
      // create token
      const token = jwt.sign(
        {
          id: userData._id,
          name: userData.name,
          email: userData.email,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1m',
        }
      );
      // success login
      if (userData) {
        req.session.userId = userData._id;
        res.json({
          message: 'success login',
          token,
        });
      } else {
        req.status(401).json({
          message: 'email or password incorrect',
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
