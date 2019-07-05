import * as actionTypes from '../action_types';
import {tools} from '../../tools/tools_2.0'

export default function (state={
    //未登录
    loginonOff:false,
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
        default:
            return state;
    }
   
}