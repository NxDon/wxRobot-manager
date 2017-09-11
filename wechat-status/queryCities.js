/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userStatus');

class queryCities {


    handler(userId, message, callback) {

        return callback(null, {
            type: 'Text', info: `请输入你所在的城市名称，例如（北京、西安、成都、武汉）：`
        });
    }
}

module.exports = queryCities;