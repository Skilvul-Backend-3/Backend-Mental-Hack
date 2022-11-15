const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');

router.get('/', (req, res) => {
  res.send('<h1></h1>Welcome To Mental Hack API</h1>');
});
router.use('/users', userRouter);

module.exports = router;
