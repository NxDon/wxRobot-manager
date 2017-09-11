/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userStatus');

class joinHQGroup {

    handler(userId, message, callback) {
        console.log(message);
        if (message.text === 'tws第二期') {
            UserStatus.create({userId: userId, status: 'queryName'}, (err) => {
                if (err) {
                    return callback(err, null);
                }
            });
            return callback(null, { type: 'add_member', info: `ThoughtWorks线上训练营第二期`})
        }
        return callback(null, {
            type: 'Text', info: `芝麻开门，暗号是什么`
        });
    }
}

module.exports = joinHQGroup;