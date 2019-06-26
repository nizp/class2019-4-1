import * as types from './actionTypes';
// import store from './index';
export function incrment(){
    // store.dispatch({type:types.INCERMENT})
    return {type:types.INCERMENT}
}

export function deincrment(){
    // store.dispatch({type:types.DEINCERMENT})
    return {type:types.DEINCERMENT}
}
