const express = require('express');

//const { locationControllers } = require('../controllers/locationControllers')

const router = express.Router();

router.route('/')
    .post(function(req, res){
        res.send("<h1>New Location</h1>");
    })
    .put(function(req, res){
        res.send("<h1>Update Location</h1>")
    });

router.route('/:id')
    .get(function(req, res){
        res.send("<h1>Get Locations of the world " + req.params.id + "</h1>")
    })
    .delete(function(req, res){
        res.send("<h1>Delete Location " + req.params.id + "</h1>")
    });

module.exports = router

