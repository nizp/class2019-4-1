import * as types from './actionTypes';
const initState = {  
    arr:[
        {
            id:0,
            txt:'好好好',
            checked:false
        },
        {
            id:1,
            txt:'好',
            checked:false
        },
        {
            id:2,
            txt:'好11123',
            checked:false
        }
    ]
    ,
    val:''
}
export default function(state=initState,action){
    let {type} = action;
    let newState = JSON.parse(JSON.stringify(state));
    switch (type) {
        case types.WRITEVAL:
            return {...state,val:action.payload}
        case types.ADDVAL:
            console.log(state.arr);
            return {arr:[{
                id:Date.now(),
                txt:state.val,
                checked:false
            },...state.arr],val:''}
        case types.CID:
            let o = newState.arr.find(item=>item.id===action.id);
            o.checked = !o.checked;
            console.log(newState.arr);
            return newState;
        default:
            break;
    }
    return state;
}