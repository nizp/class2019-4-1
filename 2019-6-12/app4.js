const express = require('express');
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('www'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './pic'}).array('image'));


app.post('/upload',(req,res)=>{
    //当前图片的名字 req.files[0].originalname
    let writePath = __dirname + "/img/" + req.files[0].originalname;//写的路径
    //访问的路径
    fs.readFile(req.files[0].path,(error,data)=>{
        if(error){
            console.log('404');
        }else{
            let o = fs.writeFileSync(writePath,data);
            res.json({code:0});
        }
    });
    // console.log();
})



app.listen(80);