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
    let newState = JSON.parse(JSON.stringify(state)); //只要进reducer就复制一份之前的对象
    switch (type) {
        case types.WRITEVAL://输入框的修改
            return {...state,val:action.payload}
        case types.ADDVAL://添加
            // console.log(state.arr);
            newState.arr.unshift({
                id:Date.now(),
                txt:state.val,
                checked:false
            });
            newState.val = '';
            return newState;
            // {arr:[{
            //     id:Date.now(),
            //     txt:state.val,
            //     checked:false
            // },...state.arr],val:''}
        case types.CID: //点选checked
            let o = newState.arr.find(item=>item.id===action.id);
            o.checked = !o.checked;
            console.log(newState.arr);
            return newState;

        case types.RMID: //删除
            newState.arr.forEach((item,i)=>{
                if(item.id===action.id){
                    newState.arr.splice(i,1);
                }
            });
            return newState;
        case types.ALL: //全选
            newState.arr.forEach((item,i)=>{
                item.checked = action.all
            });
            return newState;

        case types.DBC: //双击修改
            newState.arr.forEach((item,i)=>{
                if(item.id===action.id){
                    item.txt = action.val;
                }
            });
            return newState;
        default:
            break;
    }
    return state;
}