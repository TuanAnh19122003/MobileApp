const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const userController = require('../controllers/user.controller');

router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.get('/:id', userController.detail);
router.put('/:id', UserController.update);
router.delete('/:id', userController.delete);

module.exports = router;