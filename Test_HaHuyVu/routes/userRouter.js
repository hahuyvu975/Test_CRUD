const express = require("express");

const userController = require('../controllers/userController')

const router = express.Router();

// THêm 1 user
router.post('/add', userController.postAddUser)

// Lấy thông tin user
router.get('/read/:id', userController.getDetailUser);

// Xoá 1 user
router.post('/delete/:userId', userController.postDeleteUser);

// Cập nhật 1 user
router.post('/edit/:userId', userController.postEditUser);

module.exports = router;