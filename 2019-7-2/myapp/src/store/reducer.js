import * as actionTypes from './action_types';
import {tools} from '../tools/tools_2.0'

export default function (state={
    pid:0,
    data:{},
    arr:[]
},action){
    let o = JSON.parse(JSON.stringify(state));
   
    switch(action.type){
        case actionTypes.GETDATA:
            o.data = action.data;
            o.arr = tools.getChild(o.data,o.pid);
            return o;
        case actionTypes.CHANGEPID:
            o.pid = action.pid;
            o.arr = tools.getChild(o.data,o.pid);
            return o;
        case actionTypes.CHANGEID:
                // o.pid = action.id;
                let d =  o.data[action.id];
                if(d)d.checked = !d.checked;
                o.arr = tools.getChild(o.data,o.pid);
                return o;
        case actionTypes.CHANGEALL:
                o.arr.forEach(item=>item.checked = action.checked);
                return o;
        default :
            return state;
    }
    
}