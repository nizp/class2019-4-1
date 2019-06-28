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

//删除
export function rm(id){ 
    return {
        type:types.RMID,
        id
    }
}

//全选
export function cAll(all){ 
    return {
        type:types.ALL,
        all
    }
}


//双击修改
export function dbc(id,val){ 
    return {
        type:types.DBC,
        id,
        val
    }
}
