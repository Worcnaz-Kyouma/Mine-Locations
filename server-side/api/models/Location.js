const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../../config/sequelize');

const Location = sequelize.define('Location', {
    pkIdLocation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    fkIdWorld: {
        type: DataTypes.INTEGER
    },

    nmLocation: {
        type: DataTypes.STRING,
        defaultValue: 'Nameless',
        allowNull: false
    },

    xAxis: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },

    yAxis: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },

    zAxis: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },

    ieDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

    //createdAt and updatedAt by default
}, {
    tableName: 'Locations'
});

module.exports = Location;