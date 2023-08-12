const express = require("express");
const user = express();

user.get("/", (req, res) => {
    console.log('用户')
    res.send("用户");
});

module.exports = user;
