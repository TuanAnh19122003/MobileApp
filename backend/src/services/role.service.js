const Role = require('../models/role.model');

class RoleService {
    static async findAll() {
        const roles = await Role.findAll();
        // console.log('Data role: ', roles)
        return roles;
    }

    static async create(data) {
        const role = Role.create(data);
        return role;
    }

    static async update(id, data) {
        const role = await Role.findOne({ where: { id: id } });
        if (!role) throw new Error('Role không tồn tại');
        return await role.update(data)
    }

    static async delete(id) {
        return await Role.destroy({ where: { id: id } })
    }

}

module.exports = RoleService;