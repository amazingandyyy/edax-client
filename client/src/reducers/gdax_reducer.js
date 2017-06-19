import types from '../actions/types';

export default function(state={}, action) {
    switch (action.type) {
        case types.GET_GDAX_ACCOUNT:
            return { ...state, error: '', account: action.payload}
        case types.GET_RECEIVED_ORDER:
            return { ...state, error: '', receivedOrders: action.payload}
        case types.GET_OPEN_ORDER:
            // console.log('openOrders', action.payload)
            return { ...state, error: '', openOrders: action.payload}
        case types.GET_DONE_ORDER:
            return { ...state, error: '', doneOrders: action.payload}
        case types.GET_MATCH_ORDER:
            return { ...state, error: '', matchOrders: action.payload}
        case types.GET_CHANGE_ORDER:
            return { ...state, error: '', changeOrders: action.payload}
        case types.GET_MARGIN_PROFILE_UPDATE:   
            return { ...state, error: '', updatedMarginProfile: action.payload}
    }
    return state;
}