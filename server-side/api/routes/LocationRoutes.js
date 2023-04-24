const express = require('express');

const locationController = require('./../controllers/locationController')

const router = express.Router();

router.route('/')
    .post(locationController.createLocation)
    .put(locationController.updateLocation);

router.route('/:id')
    .get(locationController.getLocationsOfWorld)
    .delete(locationController.deleteLocation);

    /* old delete! (Just for info)

    function(req, res){
    res.send("<h1>Delete Location " + req.params.id + "</h1>")
    }*/

module.exports = router

