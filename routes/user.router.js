const express = require('express');
const router = express.Router();

const { getUsers, getUserById, addUser } = require('../controllers/user.controller');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);

module.exports = router;
