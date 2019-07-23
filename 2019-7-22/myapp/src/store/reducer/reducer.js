import * as actionTypes from '../action_types';
import {tools} from '../../tools/tools_2.0'

export default function (state={
    pid:0,
    data:{},
    arr:[]
},action){
    let o = JSON.parse(JSON.stringify(state));
    // console.log('进来了')
    switch(action.type){
        case actionTypes.GETDATA:
            o.data = action.data;
            o.arr = tools.getChild(o.data,o.pid*1);
            console.log(o.data);
            return o;
        case actionTypes.CHANGEPID:
            /*
                怎么解决点击之后，返回到上一次打开的文件时，checked状态都是false
            */
            // //把之前的删除，通过上一次的pid去拿到上一次打开的文件数据
            tools.getChild(o.data,o.pid).forEach(item=>{
                item.checked = false;
            });

            //现在的加上
            o.pid = action.pid;
            o.arr = tools.getChild(o.data,o.pid);
            return o;
        case actionTypes.CHANGEID:
                //处理的数据源
                let d =  o.data[action.id];
                if(d)d.checked = !d.checked;
                o.arr = tools.getChild(o.data,o.pid);
                // console.log(o.arr);
                return o;

        case actionTypes.CHANGETRUE:
            //改变原数据的checked状态
            Object.keys(o.data).forEach(id=>{
                if(id == action.id){
                    o.data[id].checked = true;
                    console.log( o.data );
                }
            });
            o.arr = tools.getChild(o.data,o.pid);
            return o;
        case actionTypes.CHANGEFALSE:
            //改变原数据的checked状态
            Object.keys(o.data).forEach(id=>{
                if(id == action.id){
                    o.data[id].checked = false;
                    console.log( o.data );
                }
            });
            o.arr = tools.getChild(o.data,o.pid);
            return o;
        case actionTypes.CHANGEALL:
                o.arr.forEach(item=>item.checked = action.checked);
                return o;

        case actionTypes.CREATE:
            o.arr.push({
                pid:o.pid,
                id:Date.now(),
                checked:false,
                new:true
            });
            return o;
        
        default :
            return state;
    }
    
}