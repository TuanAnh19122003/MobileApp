const AuthService = require('../services/auth.service');

class AuthController {
    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await AuthService.login(email, password);
            res.status(200).json({
                message:'Đăng nhập thành công',
                user
            })
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();