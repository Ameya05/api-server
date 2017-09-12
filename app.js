var express = require('express');
var app = express();

app.get('/userId/:id', function (req, res) {

    console.log( "Received request with id: " + req.params.id);

    var user = {
        uid: 2000+req.params.id,
        id: req.params.id
    }
    res.status(200).send(user);
})

var server = app.listen(8000, function () {
    console.log("app listening...")
})