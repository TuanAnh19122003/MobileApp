const Role = require('../models/role.model');

class RoleService {
    static async findAll() {
        const roles = await Role.findAll();
        // console.log('Data role: ', roles)
        return roles;
    }

    static async detail(slug) {
        const role = await Role.findOne({ where: { slug } });
        if (!role) throw new Error('Role không tồn tại');
        return role;
    }

    static async create(data) {
        const role = await Role.create(data);
        return role;
    }

    static async update(slug, data) {
        const role = await Role.findOne({ where: { id: slug } });
        if (!role) throw new Error('Role không tồn tại');
        return await role.update(data)
    }

    static async delete(slug) {
        return await Role.destroy({ where: { id: slug } })
    }

}

module.exports = RoleService;