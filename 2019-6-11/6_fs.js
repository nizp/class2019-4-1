const fs = require('fs');

// fs.readFile('./www/2.txt',(error,data)=>{
//     if(error){
//         console.log('404');
//     }else{
//         console.log(data.toString())
//     }
// });
// try {
//     let data = fs.readFileSync('./www/2.txt');
//     console.log(data);
// } catch (error) {
//     console.log('404');
// }



// fs.writeFile('./www/2.txt','enenaahehe',(error)=>{
//     if(error){
//         console.log('是失败');
//     }else{
//         console.log('成功');
//     }
// })

// try {
//     let d = fs.writeFileSync('./www/2.txt','enenaahehe123')
// } catch (error) {
//     console.log('是失败');
// }

fs.unlink('./www/2.txt',(error)=>{
    if(error){
        console.log('是失败');
    }
});



