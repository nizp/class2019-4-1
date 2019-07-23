const mongoose = require('mongoose');
/*
    {
        user:'于海洋',
        pass:'123',
        sex:'未知',
        age:19,
        type:3,
        pic:'http://localhost/mouse.png'
    },
*/
const UserSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:'0'
    },
    pic:{
        type:String,
        default:'http://localhost/mouse.png'
    }
});
module.exports = UserSchema;
