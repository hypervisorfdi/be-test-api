var express = require("express");
var app = express();

app.get('/merchants/accounts', (req, res) => {
    var resp = {
        username: "fadi.mohsen@gmail.com",
        roles: ['admin', 'rolex']
    }

    res.send(JSON.stringify(resp));
});

app.listen(8989);