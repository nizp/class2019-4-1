import * as actionTyps from './action_types';
import {get} from '../api_fn/index';

//改变store数据
export function getAction(data){
    return {
        type:actionTyps.GETDATA,
        data
    }
}

export function changePid(pid){
    return {
        type:actionTyps.CHANGEPID,
        pid
    }
}

export function changeId(id){
    return {
        type:actionTyps.CHANGEID,
        id
    }
}

export function changeAll(checked){
    return {
        type:actionTyps.CHANGEALL,
        checked
    }
}




//给组件调用的
export function getDate(url){
    return function(dispatch,getState){
        get(url).then(d=>{
            if(d.code === 0){
               dispatch(getAction(d.msg))
            }else{
                return false;
            }
        })
    }
}
