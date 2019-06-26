import * as types from './actionTypes';
import {combineReducers} from 'redux';
const initState = {
    num:0
};

function reducer1 (state=initState,action) {
    switch(action.type){
        case types.INCERMENT:
            return {...state,num:state.num+1}
        case types.DEINCERMENT:
            return {...state,num:state.num-1}
        default:
            return state;
    }
}

function reducer2 (state={
    num2:10
},action){
    switch(action.type){
        case types.INCERMENT2:
            return {...state,num2:state.num2+10}
        case types.DEINCERMENT2:
            return {...state,num2:state.num2-10}
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer1,
    reducer2
});

export default reducers;