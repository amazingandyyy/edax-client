import express from 'express';
import next from 'next';
import path from 'path';
import { registerSocket } from './gdax';
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  var app = express();
  var server = require('http').Server(app);
  var io = require('socket.io')(server);
  app.get('/', function(req, res) {
    handle(req, res);
  });

  io.on('connection', function(socket) {
    console.log('connected');
    registerSocket(socket);
    socket.on('disconnect', function() {
      console.log('user disconnect');
    });
  });

  server.listen(8000, err => {
    if (err) throw err;
    console.log('server is litening on 8000');
    console.log('======================================');
  });
});
