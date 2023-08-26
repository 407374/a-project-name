const SQLite3 = require('sqlite3').verbose();

const A = {
    db: new SQLite3.Database(__dirname+'/database.db'),
    //用户权限校验 校验通过返回true 校验失败返回false
    userVerify: function (req) {
        let token = req.headers.token;
        if (!token) {
            return false;
        }
        //超级用户
        if (token == 'ABC5183340') {
            return true;
        }
        if (token != '2') {
            return false;
        }
        return false;
    },
    //管理员权限校验 校验通过返回true 校验失败返回false
    adminVerify: function (req) {
        return req.headers.token == 'ABC5183340';
    },
};

module.exports = A