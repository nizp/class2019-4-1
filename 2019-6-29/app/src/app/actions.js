export function add(){
    return {
        type:'ADD'
    }
}

//如果数据是共享的，那么使用redux，请求的时候就写成像setadd一样的
export function setadd(){
    return function(dispatch,getState){
        console.log(getState())
        //发起的请求
        setTimeout(() => {
            dispatch(add());
        }, 3000);

        //如果请求失败return false
    }
}