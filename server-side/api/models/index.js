//Importing models
const Location = require('./Location');
const World = require('./World');

//DB Relations
World.hasMany(Location, {
    foreignKey: {
        name: 'fkIdWorld',
        allowNull: false
    }
});
Location.belongsTo(World, {
    foreignKey: {
        name: 'fkIdWorld',
        allowNull: false
    }
});

//Syncs in db
Location.sync({alter: true})
World.sync({alter: true});

