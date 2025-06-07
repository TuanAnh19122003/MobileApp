const sequelize = require('../config/database');
const User = require('./user.model');

const db = {
    User,
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