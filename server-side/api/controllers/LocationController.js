const locationService = require('../services/LocationService');

function createLocation(req, res){
    try {
        locationService.createLocation(req.body);
        res.sendStatus(201);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

function updateLocation(req, res){
    try {
        locationService.updateLocation(req.body);
        res.sendStatus(200);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

async function getLocationsOfWorld(req, res){
    try {
        res.status(200);
        res.send(await locationService.getLocationsOfWorld(req.params.id));
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

function deleteLocation(req, res){
    try {
        locationService.deleteLocation(req.params.id);
        res.sendStatus(200);
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