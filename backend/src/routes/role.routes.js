const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/role.controller');

router.get('/roles', RoleController.findAll);
router.post('/roles', RoleController.create);
router.get('/roles/:slug', RoleController.detailBySlug);
router.put('/roles/:slug', RoleController.update);
router.delete('/roles/:slug', RoleController.delete);

module.exports = router;