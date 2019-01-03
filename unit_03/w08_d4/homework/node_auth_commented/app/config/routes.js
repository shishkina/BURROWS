const express = require('express');
const UsersController = require('../controllers/UsersController');
const AuthenticationController = require('../controllers/AuthenticationController');

const router = express.Router();


router.get('/users', UsersController.index);
router.get('/users/:id', UsersController.show);

router.post('/login', AuthenticationController.login);
router.post('/signup', AuthenticationController.signup);
router.post('/signout', AuthenticationController.signout);

module.exports = router;