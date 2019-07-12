import * as actiontypes from './action_types';
export default {
    //添加数据
    [actiontypes.ADD](state,{id}){
        state.ary.forEach(item=>{
            if(item.id === id){
                item.num ++;
            }
        });
    },
    [actiontypes.DELE](state,{id}){
        state.ary.forEach(item=>{
            if(item.id === id){
                if(item.num > 0){
                    item.num --;
                }
            }
        });
    }
}