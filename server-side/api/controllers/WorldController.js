const { worldService } = require('../services/WorldService');

function getWorlds(req, res){
    try {
        res.send(worldService.getWorlds());
        res.sendStatus(201)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

function createWorld(req, res){
    try {
        worldService.createWorld(req.body);
        res.sendStatus(201);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports = {
    getWorlds,
    createWorld
}