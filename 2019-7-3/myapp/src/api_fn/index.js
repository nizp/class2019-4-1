import axios from 'axios';
export async function get(data){
    return await axios.get(data).then(d=>d.data)
}

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
