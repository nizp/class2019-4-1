const conn = require('../conn');
const YunSchema = require('../schemas/yun');
const YunModel = conn.model('YunSql',YunSchema);

module.exports = YunModel;