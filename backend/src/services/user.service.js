const hashPassword = require('../utils/hashPassword');
const Role = require('../models/role.model');
const User = require('../models/user.model');

class UserService {
    static async findAll() {
        const users = await User.findAll({
            include: {
                model: Role,
                as: 'roles',
                attributes: ['id', 'name']
            }
        });
        return users;
    }

    static async create(data) {
        if(data.password){
            data.password = await hashPassword(data.password);
        }
        const user = await User.create(data);
        return user;
    }

    static async detail(id) {
        const user = await User.findOne({
            where: { id },
            include: {
                model: Role,
                as: 'roles',
                attributes: ['name']
            }
        });
        if (!user) throw new Error('user không tồn tại');
        return user;
    }

    static async update(id, data) {
        const user = await User.findOne({ where: { id: id } });
        if (!user) throw new Error('User không tồn tại');

        if(data.password && data.password !== user.password){
            data.password = await hashPassword(data.password);
        } else {
            delete data.password;
        }
        return await user.update(data)
    }

    static async delete(id) {
        return await User.destroy({ where: { id: id } })
    }

}

module.exports = UserService;