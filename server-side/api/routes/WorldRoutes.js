const express = require('express');

const { worldController } = require('../controllers/WorldController');

const router = express.Router();

router.route('/')
    .get(worldController.getWorlds)
    .post(worldController.createWorld);

module.exports = router