const express = require('express');

const server = express();

const listenerCallback = function() {
    console.log('Express server')
};

const getCallback = function(req, res) {
    res.send('hello express');
};

server.set("view engine", 'ejs');

server.get('/', getCallback);

server.listen(4242, listenerCallback);