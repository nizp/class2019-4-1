import * as types from './actionTypes';
export function writeval(val){ //写输入框的
    // console.log(val);
    return {
        type:types.WRITEVAL,
        payload:val
    }
}

//添加数据
export function addval(){ 
    return {
        type:types.ADDVAL
    }
}

//切换checked
export function checkedId(id){ 
    console.log(id);
    return {
        type:types.CID,
        id
    }
}

