const express = require("express");

const app = express();

const user = require('./controller/UserController');
const path = require("path");
app.use('/', express.static(path.join(__dirname, 'public')))


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header("Pragma", "no-cache");
    next();
});

app.get("/path", (req, res) => {
    res.send(path.join(__dirname, 'public'));
});







app.use('/user', user)

module.exports = app;

