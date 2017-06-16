import * as EV from 'dotenv';
EV.config();

import * as Gdax from 'gdax';
var publicClient = new Gdax.PublicClient("ETH-USD", "https://api.gdax.com");

// publicClient.getProduct24HrStats(callback);
function callback(err: any, response: any, data: any) {
    if(err) return console.log("err", err);
    console.log("response", response);
    console.log("data", data);
}