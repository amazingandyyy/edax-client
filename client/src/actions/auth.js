import axios from './axios';
import {browserHistory} from 'react-router';
import types from './types';

export function signUserIn({email, password}) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signin`, {email, password})
            .then(res => {
                dispatch({type: types.AUTH_USER})
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: types.AUTH_ERROR, payload: 'Bad Login Info'})
            });
    }
}

export function signUserUp(userObj) {
    return function (dispatch) {
        // Submit email/password to server
        console.log('userObj: ', userObj)
        axios
            .post(`/signup`, userObj)
            .then(res => {
                dispatch({type: types.AUTH_USER})
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: types.AUTH_ERROR, payload: 'Failed to Sign up, please try again.'})
            });
    }
}

export function signUserOut() {
    return function (dispatch) {
        dispatch({type: types.UNAUTH_USER})
        localStorage.removeItem('token');
    }
}

export function fetchInfo() {
    return function (dispatch) {
        axios
            .get(`/api`)
            .then(res => {
                dispatch({
                    type: types.TRY_CONNECT,
                    payload: res.data.status
                })
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }
}
