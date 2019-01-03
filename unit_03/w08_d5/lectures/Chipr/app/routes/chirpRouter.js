const express = require('express');
const ChirpController = require('../controllers/ChirpController');

const router = express.Router();

router.get('/', ChirpController.getAllOfCurrentUser);
router.post('/', ChirpController.create);
router.delete('/:id', ChirpController.delete);

module.exports = router;
