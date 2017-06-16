require('dotenv').config();

import Gdax from 'gdax';
import fs from 'fs';
import path from 'path';
var apiURI = 'https://api.gdax.com';
var sandboxURI = 'https://api-public.sandbox.gdax.com';
var publicClient = new Gdax.PublicClient('ETH-USD', apiURI);
var authedClient = new Gdax.AuthenticatedClient(
  process.env.GDAX_API_KEY,
  process.env.DGAX_API_SECRET,
  process.env.DGAX_API_PASSPHRASE,
  sandboxURI
);
var websocket = new Gdax.WebsocketClient(['ETH-USD']);
var orderbookSync = new Gdax.OrderbookSync(['ETH-USD']);
var orderbook = new Gdax.Orderbook();

function registerSocket(socket) {
  publicClient;
  authedClient.getAccounts((err, res, data) => {
    if (!err) return socket.emit('account', data);
  });

  websocket.on('message', function(data) {
    // console.log('orderbook',orderbook);
    console.log('orderbookSync', orderbookSync);
    // socket.emit('websocket', {orderbookSync});
    // console.log(data)
    writeToFile(orderbookSync);
  });
}

function writeToFile(data) {
  const content = JSON.stringify(data, null, 2);

  fs.writeFile(path.join(__dirname + `../data/ddd.json`), content, err => {
    if (err) return console.log('err when writing!');
    console.log('file written');
  });
}

// function callback(err, response, data, msg) {
//     if (err)
//         return console.log('err', err);
//     Socket.emit(msg, {data: data})
// }

export { registerSocket };
