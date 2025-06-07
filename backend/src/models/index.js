const sequelize = require('../config/database');
const User = require('./user.model');
const Role = require('./role.model');

const db = {
    User,
    Role,
    sequelize
}

sequelize.sync({ force: false })
    .then(() => {
        console.log('Connection successful');
    })
    .catch((error) => {
        console.error('Connection error:', error);
        throw error;
    });

module.exports = db;