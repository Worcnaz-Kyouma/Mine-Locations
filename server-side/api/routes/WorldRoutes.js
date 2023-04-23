const express = require('express');

//const { worldControllers } = require('../controllers/worldControllers')

const router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.send("<h1>Get Worlds</h1>");
    })
    .post(function(req, res){
        res.send("<h1>New World</h1>");
    })

module.exports = router