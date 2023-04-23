/**Geting the rootRouter */
const express = require('express');
const rootRoutes = express.Router();

/**Importing all routes */
const worldRoutes = require("./WorldRoutes")
const locationRoutes = require("./LocationRoutes")

/**Connecting all routes*/
rootRoutes.use('/worlds', worldRoutes);
rootRoutes.use('/locations', locationRoutes);

/**Exporting rootRoutes */
module.exports = rootRoutes;