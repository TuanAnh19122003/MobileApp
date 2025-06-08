const UserService = require('../services/user.service');

class UserController {
    async findAll(req, res) {
        try {
            const users = await UserService.findAll();
            res.status(200).json({
                message: 'Lấy danh sách người dùng thành công',
                users
            })
        } catch (error) {
            console.log('Lỗi: ', error);
            res.status(500).json({
                message: 'Lỗi lấy danh sách người dùng',
                data
            })
        }
    }

    async create(req, res) {
        try {
            const user = await UserService.create(req.body);
            res.status(200).json({
                message: 'Thêm người dùng thành công',
                user
            })
        } catch (error) {
            res.status(500).json({
                message: 'Lỗi khi thêm người dùng',
                error: error.message
            })
        }
    }

    async detail(req, res) {
        try {
            const id = req.params.id;
            const user = await UserService.detail(id);
            res.status(200).json({
                message: 'Lấy thông tin người dùng thành công',
                data: user
            });
        } catch (error) {
            console.error('Lỗi:', error);
            res.status(401).json({
                message: error.message || 'Không tìm thấy ngươi dùng',
            });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const update = await UserService.update(id, data);

            res.status(201).json({
                message: 'Cập nhật thành công người dùng',
                user: update
            })
        } catch (error) {
            console.log('Lỗi: ', error);
            res.status(401).json({
                message: "Đã xảy ra lỗi khi cập nhật người dùng",
                error: error.message
            })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedCount = await UserService.delete(id);

            if (deletedCount === 0) {
                return res.status(404).json({
                    message: 'Không tìm thấy người dùng để xóa'
                });
            }

            res.status(200).json({
                message: 'Xóa thành công người dùng'
            });
        } catch (error) {
            res.status(401).json({
                message: "Đã xảy ra lỗi khi xóa vai trò",
                error: error.message
            });
        }
    }

}

module.exports = new UserController();