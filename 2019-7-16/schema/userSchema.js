const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    user:{
        required:true,
        type:String
    },
    pass:{
        required:true,
        type:String
    },
    rank:{
        default:0,
        type:Number
    }
});
module.exports = UserSchema;