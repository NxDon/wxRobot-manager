/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userStatus');

class queryName {


    handler(userId, message, callback) {

        return callback(null, {
            type: 'Text', info: `gg`
        });
    }
}

module.exports = queryName;