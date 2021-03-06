/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userInfos');
const constant = require('../config/constant')

class joinCollegeGroup {
    handler(userId, message, callback) {
        let college = message.text;
        //更新信息之后，加入HQGroup
        UserStatus.update({userId: userId}, {status: 'end', college: message.text}, (err) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, {
                type: 'add_member',
                info: "思特沃克特训营第二期总群"
            })
        });
    }
}

module.exports = joinCollegeGroup;