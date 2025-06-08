const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./role.model');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
}, {
    timestamps: true,
    tableName: 'users'
})

User.belongsTo(Role, { foreignKey: 'roleId', as: 'roles' });
Role.hasMany(User, { foreignKey: 'roleId', as: 'users' });


module.exports = User;