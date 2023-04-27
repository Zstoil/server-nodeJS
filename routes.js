const router = require('express').Router();

const carController = require('./controllers/carController');
const authController = require('./controllers/authController');
const carLikeButton = require('./controllers/carLikeButton');
const carUnLikeButton = require('./controllers/carUnLikeButton');

router.use('/data/like',carLikeButton);
router.use('/data/unLike',carUnLikeButton);
router.use('/data/cars',carController);
router.use('/users',authController);

module.exports = router;