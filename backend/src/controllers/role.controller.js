const { INTEGER } = require('sequelize');
const RoleService = require('../services/role.service');
const Role = require('../models/role.model');

class RoleController {
    async findAll(req, res) {
        try {
            const data = await RoleService.findAll();
            res.status(200).json({
                message: 'Lấy danh sách vai trò thành công',
                data
            })
        } catch (error) {
            console.log('Lỗi: ', error);
            res.status(500).json({
                message: "Đã xảy ra lỗi khi lấy danh sách vai trò",
                error: error.message
            })
        }
    }

    async create(req, res) {
        try {
            const role = await RoleService.create(req.body);
            res.status(200).json({
                message: "Thêm thành công",
                role
            })
        } catch (error) {
            console.log('Lỗi: ', error);
            res.status(500).json({
                message: "Đã xảy ra lỗi khi thêm vai trò",
                error: error.message
            })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const update = await RoleService.update(id, data);
            console.log(update);

            res.status(201).json({
                message: 'Cập nhật thành công vai trò',
                role: update
            })
        } catch (error) {
            console.log('Lỗi: ', error);
            res.status(500).json({
                message: "Đã xảy ra lỗi khi cập nhật vai trò",
                error: error.message
            })
        }
    }

    async delete(req, res) {
        try {
            const role = await RoleService.delete(req.params.id);
            res.status(201).json({
                message: 'Xóa thành công vai trò',
            })
        } catch (error) {
            res.status(500).json({
                message: "Đã xảy ra lỗi xóa vai trò",
                error: error.message
            })
        }
    }
}

module.exports = new RoleController();