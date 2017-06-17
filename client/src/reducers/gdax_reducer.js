import types from '../actions/types';

export default function(state={}, action) {
    switch (action.type) {
        case types.FETCH_DGAX:
            return { ...state, error: '', authenticated: true}
    }
    return state;
}