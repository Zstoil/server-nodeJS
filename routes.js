const router = require('express').Router();

const carController = require('./controllers/carController');
const authController = require('./controllers/authController');

router.use('/data/cars',carController);
router.use('/users',authController);

module.exports = router;