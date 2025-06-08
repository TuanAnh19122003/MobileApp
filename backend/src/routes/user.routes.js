const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const userController = require('../controllers/user.controller');

router.get('/users', UserController.findAll);
router.post('/users', UserController.create);
router.get('/users/:id', userController.detail);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;