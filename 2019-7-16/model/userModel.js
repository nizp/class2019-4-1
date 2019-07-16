const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1/haha',{
    useNewUrlParser:true
});
const UserModel = conn.model('User',require('../schema/userSchema'));

console.log(UserModel,333);

module.exports = UserModel;
