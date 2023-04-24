const worldService = require('../services/WorldService');

async function getWorlds(req, res){
    try {
        res.status(200);
        res.send(await worldService.getWorlds());
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