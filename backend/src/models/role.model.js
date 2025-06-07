const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const toSlug = require('../config/slug');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true,
    tableName: 'roles',
    hooks: {
        beforeValidate: (role, options) => {
            if ((!role.slug || role.slug.trim() === '') && role.name) {
                const slug = toSlug(role.name);
                role.slug = slug || 'default-slug';  // tránh trường hợp toSlug trả về chuỗi rỗng
            }
        },
        beforeUpdate: (role, options) => {
            if (role.changed('name') && role.name) {
                const slug = toSlug(role.name);
                role.slug = slug || role.slug; // fallback giữ nguyên slug nếu rỗng
            }
        },
    }


})

module.exports = Role;