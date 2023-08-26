const express = require("express");
const good = express();
const A = require('../Util/A');

good.get("/infos", (req, res) => {
    A.db.all("select T.KIND_ORDER,T.KIND_NAME,T2.GOOD_ID,T2.GOOD_ORDER,T2.GOOD_NAME,T2.GOOD_DESC,T2.GOOD_IMG,T2.GOOD_PRICE,T2.GOOD_NUM from KIND_INFO T INNER JOIN GOOD_INFO T2 ON T.KIND_ID=T2.KIND_ID ORDER BY KIND_ORDER",[],function (err,rows){
        res.send(rows)
    })
});

module.exports = good;
