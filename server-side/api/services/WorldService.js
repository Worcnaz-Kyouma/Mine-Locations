const World = require('./../models/World');

function getWorlds(){
    return World.findAll();
}

function createWorld(worldJSON){
    const newWorld = World.build(worldJSON);
    newWorld.save();
}

module.exports = {
    getWorlds,
    createWorld
}