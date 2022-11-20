const express = require('express');
const router = express.Router();

const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const { verifyToken, adminOnly } = require('../middleware/authUser');

router.get('/', verifyToken, adminOnly, getUsers);
// router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
