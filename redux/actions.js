import actionTypes from './types';
import io from 'socket.io-client';

export const getMessages = () => dispatch => {
  var socket = io('http://localhost:8000');
  var lastOrderTradeId = 0;
  var messages;
  socket.on('websocket', function (data) {
    messages = data.data;
    if (messages.type === 'match' && messages.trade_id > lastOrderTradeId) {
    console.log(messages)
      lastOrderTradeId = messages.trade_id;
      dispatch({type: actionTypes.GET_MATCH, payload: messages});
    }
  })
};