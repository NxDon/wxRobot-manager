/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userInfos');
const constant = require('../config/constant');

class joinCityGroup {
    handler(userId, message, callback) {
        let city = message.text;
        if (!['西安', '武汉', '成都', '北京'].includes(city)) {
            console.log('not In cities');
            city = '全国（其他城市）'
        }
        UserStatus.update({userId: userId}, {status: 'inputCollege', city: message.text}, (err) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, {
                type: 'Text',
                info: "录入城市信息成功，请录入学校完整名称：",
            })
        });
    }
}

module.exports = joinCityGroup;