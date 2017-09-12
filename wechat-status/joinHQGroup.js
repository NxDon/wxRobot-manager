/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userInfos');
const constant = require('../config/constant');

class joinHQGroup {

    handler(userId, message, callback) {
        if (message.text === constant.infos.secretCode) {
            UserStatus.create({
                userId: userId,
                status: 'queryName',
                userRealName: constant.infos.defaultUserName,
                city:constant.infos.defaultCity,
                college:constant.infos.defaultCollege
            }, (err) => {
                if (err) {
                    return callback(err, null);
                }
            });
            return callback(null, {type: 'add_member', info: constant.infos.HQGroup, currentGroup: 'HQGroup'})//currentGroup用于在wxpy中返回相应的加群信息
        } else if (message.text === '我要上车') {
            return callback(null, {type: 'add_member', info: constant.infos.ConsultGroup, currentGroup: 'ConsultGroup'})
        }
        return callback(null, {
            type: 'Text', info: constant.infos.tips
        });
    }
}

module.exports = joinHQGroup;