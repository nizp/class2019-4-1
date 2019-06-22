const fs = require('fs');
// fs.readFile('./1_promise.html',(error,data)=>{
//     if(error){
//         console.log('失败');
//     }else{
//         console.log(data);
//     }
// })

fs.readFilePromise= function(url){
    return new Promise((resolve, reject) => {
        fs.readFile(url,(error,data)=>{
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        })
    });
}



// let data = fs.readFileSync('./1_promise.html');

let p1 = fs.readFilePromise('./1_promise.html');

p1.then((data)=>{
    console.log(data);
},(error)=>{
    console.log(error);
});

console.log(2);


