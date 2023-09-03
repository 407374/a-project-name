const SQLite3 = require('sqlite3').verbose();
const db = new SQLite3.Database(__dirname + '/database.db');
const axios = require("axios").default;
const A = {
    db,
    test: function () {
        console.log('A TEST LOG');
    },
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
    begin: function () {
        db.run('BEGIN;');
    },
    commit: function () {
        db.run('COMMIT;');
    },
    //生成UUID
    generateUUID: function () {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 32; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    AppAccessToken: null,
    setAppAccessToken: function () {
        let tempAppAccessToken = null;
        return axios({
            url: `${process.env.KV_REST_API_URL}/get/AppAccessToken`,
            headers: {
                Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
            },
            responseType: "json"
        }).then(value => {
            if (value.data.AppAccessToken != null) {
                A.AppAccessToken = value.data.AppAccessToken;
                return Promise.reject(A.AppAccessToken);
            }
        }).then(() => {
            return axios({
                method: "POST",
                url: "https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    "app_id": "cli_a4ddfc2de37c500e",
                    "app_secret": "rxaL0NzreRLqra0FHlfYPbOTA6n6JfQl"
                },
                responseType: "json"
            })
        }).then(function (res) {
            tempAppAccessToken = res.data.app_access_token;
            return axios({
                url: `${process.env.KV_REST_API_URL}/set/AppAccessToken/${res.data.app_access_token}/ex/${res.data.expire - 300}`,
                headers: {
                    Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
                },
                responseType: "json"
            })

        }).then(function () {
            A.AppAccessToken = tempAppAccessToken;
            return A.AppAccessToken
        }).catch(() => {
            return A.AppAccessToken
        })
    },
    getAppAccessToken: function () {
        if (A.AppAccessToken != null) {
            return new Promise((resolve) => {
                resolve(A.AppAccessToken);
            });
        } else {
            return A.setAppAccessToken().then(value => {
                return value;
            });
        }
    },

};


module.exports = A