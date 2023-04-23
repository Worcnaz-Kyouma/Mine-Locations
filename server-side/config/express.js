const express = require('express');
const cors = require('cors');
const port = 6969;

module.exports = () => {
    const app = express();

    app.set('port', port);

    app.use(cors());
    app.use(express.json());

    return app;
}