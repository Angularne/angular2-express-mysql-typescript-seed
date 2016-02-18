/// <reference path="./typings/tsd.d.ts"/>
"use strict";
var express = require('express');
var socketio = require('socket.io');
var path = require('path');
var app = express();
app.use(express.static(__dirname + "/../../client"));
app.use(express.static(__dirname + "/../../client/node_modules"));
app.get('/test', function (req, res) {
    res.send("hello");
});
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
var io = socketio(server);
var text = 'sup?';
var clientsConnected = 0;
io.on('connection', function (socket) {
    clientsConnected++;
    console.log('socket:connection - ' + clientsConnected);
    io.emit('change', {
        text: text,
        clients: clientsConnected
    });
    socket.on('send', function (data) {
        text = data.text;
        console.log(data);
        socket.broadcast.emit('change', {
            text: text,
            clients: clientsConnected
        });
    });
    socket.on('close', function (socket) {
        clientsConnected--;
        console.log('socket:close - ' + clientsConnected);
        io.emit('change', {
            text: text,
            clients: clientsConnected
        });
    });
    socket.on('disconnect', function (socket) {
        clientsConnected--;
        console.log('socket:disconnect - ' + clientsConnected);
        io.emit('change', {
            text: text,
            clients: clientsConnected
        });
    });
});
//# sourceMappingURL=server.js.map