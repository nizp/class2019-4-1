const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const qm = 'hahaha'; //签名
function generateToken(data){
    let created = Math.floor(Date.now() / 1000); //生成一个时间
    // let cert = fs.readFileSync(path.join(__dirname, '../config/pri.pem'));//私钥
    //设置token的
    let token = jwt.sign({
        data,
        exp: created + 20 //3600 * 24  //过期时间
    },qm);
    return token;
}

// let tokenId = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjAwNyJ9LCJleHAiOjE1NjM5NjE2OTIsImlhdCI6MTU2Mzg3NTI5Mn0.lgChwwVVuZjmrD3LZp-jlQtL8ZbsH-fQHfMaRJjPD8Y';

//

console.log(generateToken({uid:'007'}))

app.get('/tk',(req,res)=>{
    const {tk} = req.query;
    
    

    // console.log(tkData);
    //如果token过期那么就会报错
    try{
        const tkData = jwt.verify(tk,qm);
        console.log('没过期',tkData.data);
    }catch(e){
        console.log('过期')
    }
})








app.listen(88);




