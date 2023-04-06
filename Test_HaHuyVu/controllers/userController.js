const User = require('../models/User');

// Thêm 1 user
exports.postAddUser = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const coordinate = req.body.coordinate;
    const user = new User(null, firstName, lastName, age, coordinate)
    user.save();
    if (user) {
        res.status(200).send( user);
    } else {
        res.status(404).send("Not create user !!");
    }
}

// lấy thông tin của user
exports.getDetailUser = (req, res, next) => {
    const userId = req.params.id
    console.log(userId);
    User.findById(userId, users => {
        if (users) {
            res.status(200).send(users);
        } else {
            res.status(404).send("Not found detail user!!");
        }
    })
}

// Xoá 1 user
exports.postDeleteUser = (req, res, next) => {
    const userId = req.params.userId;
    const userIndex = User.deleteById(userId);
    if (userIndex !== -1) {
        res.status(200).send("Deleted user");
    } else {
        res.status(404).send("Can't delete user");
    }
}

// Sửa 1 user
exports.postEditUser = (req, res, next) => {
    const userId = req.params.userId;
    const updatedFirstName = req.body.firstName;
    const updatedLastName = req.body.lastName;
    const updatedAge = req.body.age;
    const updatedCoordinate = req.body.coordinate;
    const updatedUser = new User(
        userId,
        updatedFirstName,
        updatedLastName,
        updatedAge,
        updatedCoordinate
    );
        updatedUser.save();
        console.log(updatedUser);
        if (updatedUser) {
            res.status(200).send(updatedUser);
        } else {
            res.status(404).send("Not update user !!");
        }
        
}
