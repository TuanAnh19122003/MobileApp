const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/role.controller');

router.get('/roles', RoleController.findAll);
router.post('/roles', RoleController.create);
router.put('/roles/:id', RoleController.update);
router.delete('/roles/:id', RoleController.delete);

module.exports = router;