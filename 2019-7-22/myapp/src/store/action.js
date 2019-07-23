import * as actionTyps from './action_types';
import {get,post,postToken} from '../api_fn/index';

//改变store数据
export function getAction(data){
    console.log(data);
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


export function changetrue(id){
    return {
        type:actionTyps.CHANGETRUE,
        id
    }
}

export function changefalse(id){
    return {
        type:actionTyps.CHANGEFALSE,
        id
    }
}




export function changeAll(checked){
    return {
        type:actionTyps.CHANGEALL,
        checked
    }
}

export function create(){
    return {
        type:actionTyps.CREATE
    }
}



//给组件调用的
export function getDate(url){
    return function(dispatch,getState){
        post(url).then(d=>{
            if(d.code === 0){
                let obj = {};
                d.data.forEach((item)=>{
                    obj[item._id] = item;
                });
                console.log(obj);
                dispatch(getAction(obj));
            }else{
                return false;
            }
        })
    }
}



export function add(title){
    return function(dispatch,getState){
        let {arr,pid} = getState(); //拿到刚才的arr
        //进行判断，是否重命名

        //拿到除了最后一个数据的别的数据
        let ary = arr.slice(0,arr.length-1);

        // [1,2,3]  arr.slice(0,2) -> [1,2]

        let b = ary.some(item=>item.title === title);
        let v = ''; 
        let num = 0;

        if(b){ 
            //如果有包含名字就说明重命名
            //新建文件夹->新建文件夹(1)->新建文件夹(2)..
            while(b){
                num ++;
                v = title + '(' + num +')';
                b = ary.some(item=>item.title === v);
            }

        }else{
            //不重名
            v = title;
        }

        
        console.log(v);

        get('/add?pid='+pid+'&title='+v).then(d=>{
            if(d.code === 0){
               dispatch(getAction(d.msg))
            }else{
                return false;
            }
        })


        // if(data.code === 0){
        //     getAction(data);
        // }
    }
    
}


export function rm(){
    return function(dispatch,getState){
        let {arr} = getState(); //拿到刚才的arr

        //判断一下checked的值有几个，
        //
        let ary = arr.filter(item=>item.checked).map(item=>item._id);
        // arr.map(item=>{
        //     if(item.checked){
        //         return item.id
        //     }
        // })

        get('/rm?ary='+JSON.stringify(ary)).then(d=>{
            if(d.code === 0){
                console.log(d.msg);
               dispatch(getAction(d.msg))
            }else{
                return false;
            }
        })
    }
    
}



//用户

//登录
export function login(user,pw){
    return function(dispatch,getState){
    
        post('/user/login',{
            user,
            pass:pw
        }).then(d=>{
            if(d.code === 0){
                //成功
                localStorage.setItem('token',d.token);
                postToken();//种在请求头上
                dispatch({
                    type:actionTyps.LOGIN,
                    data:d.msg
                })
               
            }else{
                dispatch({
                    type:actionTyps.ADDMSG,
                    msg:d.msg
                })
            }
        })
    }
}


export function getcookie(){
    return function(dispatch,getState){
    
        post('/getToken',{token:localStorage.getItem('token')}).then(d=>{
            if(d.code === 0){
                //成功
                
                console.log(d,'有token');
                //如果是成功的状态就不用改变loginonOff，不成功才改变状态
                if(!getState().reducer_user.loginonOff){
                    dispatch({
                        type:actionTyps.LOGIN,
                        data:d
                    })
                }
                
            }else{
                dispatch({
                    type:actionTyps.ADDMSG,
                    msg:d.msg
                })
            }
        })
    }
}
