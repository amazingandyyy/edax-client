require('dotenv').config();

import Gdax from 'gdax';
import fs from 'fs';
var apiURI = 'https://api.gdax.com';
var publicClient = new Gdax.PublicClient('ETH-USD', apiURI);
var authedClient = new Gdax.AuthenticatedClient(
  process.env.GDAX_API_KEY,
  process.env.DGAX_API_SECRET,
  process.env.DGAX_API_PASSPHRASE,
  apiURI
);
var websocket = new Gdax.WebsocketClient(['ETH-USD']);
var orderbookSync = new Gdax.OrderbookSync(['ETH-USD']);
var orderbook = new Gdax.Orderbook();

function registerSocket(socket) {
  authedClient.getAccounts((err, res, data) => {
    if (!err) return socket.emit('account', data);
  });
  websocket.on('message', function(data) {
    socket.emit('websocket', data);
    // console.log('data', data.data);
  });
}
console.log('orderbookSync', orderbookSync)

function write(data) {
  fs.writeFile('./snapshot.json', JSON.stringify(data, null, 2), err => {
    console.log(err ? err : 'cool');
  });
}

// function callback(err, response, data, msg) {     if (err)         return
// console.log('err', err);     Socket.emit(msg, {data: data}) }

export { registerSocket };
