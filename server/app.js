import express from 'express';
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
import path from 'path';
import { registerSocket } from './gdax';

server.listen(8000, () => {
  console.log('server is litening on 8000');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

io.on('connection', function(socket) {
  registerSocket(socket);
  socket.on('disconnect', function() {
    console.log('user disconnect');
  });
});
