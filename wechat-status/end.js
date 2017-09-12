/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userInfos');
const constant = require('../config/constant')

class joinCollegeGroup {
    handler(userId, message, callback) {
        //更新信息之后，加入HQGroup
        UserStatus.update({userId: userId}, {status: 'end'}, (err) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, {
                type: 'Text',
                info: "加群流程完毕"
            })
        });

    }
}

module.exports = joinCollegeGroup;