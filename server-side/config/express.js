const express = require('express');
const cors = require('cors');
const port = 6969;

function createServer(){
    const server = express();

    server.set('port', port);

    server.use(cors());
    server.use(express.json());

    return server;
}

module.exports = createServer();