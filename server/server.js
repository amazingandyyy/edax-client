import express from 'express';
import {registerSocket} from './gdax';

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('connected');
  registerSocket(socket);
  socket.on('disconnect', function () {
    console.log('user disconnect');
  });
});

server.listen(8000, err => {
  if (err) 
    throw err;
  console.log('server is litening on 8000');
  console.log('======================================');
});