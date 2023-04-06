const fs  = require('fs');
const path = require('path'); 



const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'users.json'
);

const getUsersFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class User {
    constructor(id, firstName, lastName, age, coordinate){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.coordinate = coordinate;
    }

    save() {
        getUsersFromFile(users => {
            if(this.id) {
                const existingUserIndex = users.findIndex(
                    user => user.id === this.id
                );
                const updatedUsers = [...users];
                updatedUsers[existingUserIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedUsers), err => {
                    console.log("Cập nhật thành công!!");
                });
            } else {
                this.id = Math.random().toString();
                users.push(this)
                fs.writeFile(p, JSON.stringify(users), (err) => {
                    console.log("Tạo thanh cong");
                });
            }
        })
    }

    static deleteById(id) {
        getUsersFromFile(users => {
            const updatedUsers = users.filter(u => u.id !== id); 
            fs.writeFile(p, JSON.stringify(updatedUsers), err => {
                console.log("Xoa thanh cong");
            })
            });
    }
    static fetchAll(cb) {
        getUsersFromFile(cb);
    };

    static findById(id, cb) {
        getUsersFromFile(users => {
            const user = users.find(u => u.id === id);
            cb(user);
        })
    }
    static sortName
}