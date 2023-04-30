const router = require('express').Router();

const carController = require('./controllers/carController');
const authController = require('./controllers/authController');
const carLikeButton = require('./controllers/carLikeButton');
const carUnLikeButton = require('./controllers/carUnLikeButton');
const carComments = require('./controllers/carComments');

router.use('/undefined/data/like',carLikeButton);
router.use('/undefined/data/unLike',carUnLikeButton);
router.use('/undefined/data/comments',carComments);
router.use('/undefined/data/cars',carController);
router.use('/undefined/users',authController);

module.exports = router;