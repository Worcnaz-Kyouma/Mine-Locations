const { locationService } = require('../services/LocationService');

function createLocation(req, res){
    try {
        locationService.createLocation(req.body);
        res.status(201);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

function updateLocation(req, res){
    try {
        locationService.updateLocation(req.body);
        res.status(201);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

function getLocationsOfWorld(req, res){
    try {
        res.send(locationService.getLocationsOfWorld(req.params.id));
        res.status(201);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

function deleteLocation(req, res){
    try {
        locationService.deleteLocation(req.params.id);
        res.status(201);
    } catch (e) {
        console.log(e.message);
        res.status(500);
    }
}

module.exports = {
    createLocation,
    updateLocation,
    getLocationsOfWorld,
    deleteLocation
}