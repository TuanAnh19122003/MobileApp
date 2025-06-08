const Role = require('../models/role.model');
const User = require('../models/user.model');
const checkPassword = require('../utils/checkPassword');

class AuthService {
    static async login(email, password) {
        const user = await User.findOne({
            where: { email },
            include : {
                model: Role,
                as: 'roles',
                attributes:['id', 'name']
            }
        })

        if(!user){
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        const isMatch = await checkPassword(password, user.password);
        if (!isMatch) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        return user;

    }
}

module.exports = AuthService;