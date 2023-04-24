const Location = require('./../models/Location')

function createLocation(locationJSON){
    const newLocation = Location.build(locationJSON);
    newLocation.save();
}

function updateLocation(locationJSON){
    const oldLocationPromise = Location.findByPk(locationJSON.pkIdLocation);
    const { pkIdLocation, fkIdWorld, ...rest } = locationJSON;
    locationJSON = rest;

    oldLocationPromise.then(oldLocation => {
        oldLocation.set(locationJSON);
        oldLocation.save();
    })
}

function getLocationsOfWorld(fkIdWorld){
    return Location.findAll({
        where: {
            fkIdWorld: fkIdWorld
        }
    });
}

function deleteLocation(pkIdLocation){
    const locationPromise = Location.findByPk(pkIdLocation);
    locationPromise.then(location => location!=null && location.destroy());
}

module.exports = {
    createLocation,
    updateLocation,
    getLocationsOfWorld,
    deleteLocation
}