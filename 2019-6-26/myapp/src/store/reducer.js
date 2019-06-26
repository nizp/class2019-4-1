import * as types from './actionTypes';
const initState = {
    num:0
}
/* 
    {...state,} 浅拷贝
    JSON.parse(JSON.stringify()) 深拷贝
*/
// console.log(types)
export default function(state=initState,action){
    switch(action.type){
        case types.INCERMENT:
            // console.log(state);
            return {...state,num:state.num+1}
        case types.DEINCERMENT:
            return {...state,num:state.num-1}
        default:
            return state;
    }
}