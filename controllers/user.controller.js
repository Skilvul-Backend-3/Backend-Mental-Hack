const User = require('../models/user');

module.exports = {
  getUsers: async(req, res) => {
    try {
      const users = await User.find();
      res.json(users)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  },
};
