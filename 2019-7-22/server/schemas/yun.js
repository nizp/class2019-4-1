const mongoose = require('mongoose');
/*
    {
        "id": 0,
        "pid": -1,
        "title": "微云",
        "type": "file",
        "checked":false
    }
*/
const YunSchema = new mongoose.Schema({
    "pid": {
        type:Number,
        required:true
    },
    "title": String,
    "type": String,
    "checked":Boolean
});
module.exports = YunSchema;
