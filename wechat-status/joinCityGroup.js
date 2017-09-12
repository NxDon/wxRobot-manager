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
        UserStatus.update({userId: userId}, {status: 'joinCollegeGroup', city: message.text}, (err) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, {
                type: 'add_member',
                info: constant.infos.CityGroup + city,
                currentGroup: 'CityGroup'
            })
        });
    }
}

module.exports = joinCityGroup;