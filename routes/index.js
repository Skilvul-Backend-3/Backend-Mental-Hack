const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const blogRouter = require('./blog.router');

router.get('/', (req, res) => {
  res.send('<h1></h1>Welcome To Mental Hack API</h1>');
});
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/blog',blogRouter);

module.exports = router;
