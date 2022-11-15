const User = require('../models/user');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  addUser: async (req, res) => {
    const user = new User(req.body);
    try {
      const inserteduser = await user.save();
      res.status(201).json(inserteduser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
