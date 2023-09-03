const express = require("express");
const app = express();
app.use('/', express.static(__dirname + '/public'));

//controller
const user = require('./controller/UserController');
const good = require('./controller/GoodController');


const axios = require("axios").default;

const A = require('../api/Util/A');


//设置允许跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header("Pragma", "no-cache");
    next();
});


app.get("/test", async (req, res) => {
    res.send(await A.getAppAccessToken());

    // var config = {
    //     method: 'get',
    //     url: 'https://logical-racer-33131.kv.vercel-storage.com/get/AppAccessToken',
    //     headers: {
    //         'Authorization': 'Bearer AYFrASQgMzMxZDY5ZWQtMjVjMS00NjAzLThjOTUtNDEzZTUxNTAzZTc2MGM1Y2Y3ZTNlZmVlNGFmMmJjZTY2MzJmMjEyYmM3NzE=',
    //     }
    // };
    //
    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         res.send(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
});

app.get("/null", async (req, res) => {

    A.AppAccessToken=null;
    res.send('成功');

})


app.get("/search", (req, res) => {

    console.log(req.query.q)
    A.db.all('select * from MNLG_STU_INFO where STU_NAME = ?', [req.query.q], function (err, rows) {
        console.log(rows);
        for (let row of rows) {
            res.send({
                title: row.STU_NAME,
                text: `身份证:${row.STU_CARDNO} 性别${row.STU_SEX} 联系电话${row.STU_PHONE}`,
            });
        }
    })

});


app.get("/robot", (req, res) => {
    let key = req.query.key;
    if (!key) {
        return res.send('您所输入的KEY无效');
    }
    const options = {
        method: 'POST',
        url: 'https://api.notion.com/v1/databases/d015df08e71e4d389e6d5c8216803c50/query',
        headers: {
            'Notion-Version': '2022-06-28',
            'Authorization': 'Bearer secret_CVQLPVhKCea6MP1bZSxq6riO8nEfChz3zieBLCRlwXS',
            'content-type': 'application/json'
        },
        data: {
            "filter": {
                "and": [
                    {
                        "property": "KEY",
                        "rich_text": {
                            "equals": key
                        }
                    }
                ]
            }
        }
    };
    axios.request(options).then(function (response) {
        let e = response.data;
        if (e.results.length == 0) {
            return res.send('您所输入的KEY无效');
        } else if (e.results.length == 1) {
            let s = '';
            for (let v of e.results[0].properties.VALUE.rich_text) {
                s += v.text.content;
            }
            return res.send(s);
        }
        return res.send('您所输入的KEY无效');
    }).catch(function (error) {
        return res.send('您所输入的KEY无效');
    });


});


app.use('/user', user);
app.use('/good', good);


module.exports = app;

