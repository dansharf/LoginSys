var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('At index.');
});

app.listen(3000);
