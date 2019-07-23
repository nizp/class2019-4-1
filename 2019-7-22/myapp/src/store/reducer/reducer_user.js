import * as actionTypes from '../action_types';
import {tools} from '../../tools/tools_2.0'


function getcookie(key){
    let re = new RegExp('(\\b|\\s)'+key+'=([^\\s]+)\\s?');
    // console.log(document.cookie)
    let onoff = false;
    document.cookie.replace(re,($0,$1,$2)=>{
        onoff = !!$2; //真实的布尔值
    });
    return onoff;
}
export default function (state={
    //未登录
    loginonOff:getcookie('user'),
    data:{
        user:'',
        pic:'',
        type:0,
        sex:''
    },
    msg:''
},action){
    const o = JSON.parse(JSON.stringify(state));
    // console.log(action);
    switch(action.type){
        case actionTypes.LOGIN:
            o.msg = action.data.msg;
            o.data = action.data.data;
            o.loginonOff = true;
            // console.log(action.data.data,222222)
            return o;
        case actionTypes.ADDMSG:
            o.msg = action.msg;
            // o.data = action.data.data;
            o.loginonOff = false;
            // console.log(action.data.data,222222)
            return o;
        default:
            return state;
    }
   
}