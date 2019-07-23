const conn = require('../conn');
const UserSchema = require('../schemas/user');
const UserModel = conn.model('UserSql',UserSchema);

module.exports = UserModel;