import types from './types';
import io from 'socket.io-client';

export function getData() {
    return function (dispatch) {
        var socket = io('http://localhost:8000');
        socket.on('account', function (data) {
            console.log(data);
            dispatch({type: types.GET_GDAX_ACCOUNT, payload: data});
        });

        var lastSequence = 0;
        socket.on('websocket', function (d) {
            var data = d;
            // console.log('data',data);
            switch (data.type) {
                case 'received':
                    // console.log('received', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_RECEIVED_ORDER, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                case 'open':
                    // console.log('open', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_OPEN_ORDER, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                case 'done':
                    // console.log('done', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_DONE_ORDER, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                case 'match':
                    // console.log('match', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_MATCH_ORDER, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                case 'change':
                    // console.log('change', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_CHANGE_ORDER, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                case 'margin_profile_update':
                    // console.log('margin_profile_update', data)
                    if (data.sequence > lastSequence) {
                        dispatch({type: types.GET_MARGIN_PROFILE_UPDATE, payload: data});
                        lastSequence = data.sequence;
                    }
                    break;
                default:
                    break;
            }
        })
    }
}