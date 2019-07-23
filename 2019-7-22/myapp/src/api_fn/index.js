import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// import qs from 'querystring';
export async function get(data){
    return await axios.get(data).then(d=>d.data)
}
//{a:1}-> 'a=1&b=2'
//qs.stringify(data)
export async function post(url,data){
    return  axios.post(url,''+new URLSearchParams(data)).then(d=>d.data)
    //   await fetch(url,{
    //     method: 'post',
    //     body:new URLSearchParams(data),
    //     headers:{
    //         "Content-Type":"application/x-www-form-urlencoded"
    //     }
    // }).then(d=>d.json())
}


export async function postToken(){
    const token = localStorage.getItem('token');
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    }else{
        delete axios.defaults.headers.common['Authorization']
    }
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// //文件管理
// export async function get(data){
//     return await axios.get('/post/xx1?'+data).then(d=>d.data)
// }

// //用户管理
// export async function get(data){
//     return await axios.get('/post/xx2?'+data).then(d=>d.data)
// }

// '/post/xx1'

// '/post/xx1?a=1&b=2'
// '/post/xx1?x=10&y=20'
// '/post/xx1?num=100&pid=9'



// '/post/xx2'
