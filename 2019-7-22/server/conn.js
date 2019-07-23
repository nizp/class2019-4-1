const mongoose = require('mongoose');
const conn =  mongoose.createConnection('mongodb://127.0.0.1/hehe',{
    useNewUrlParser:true
});

module.exports = conn;
