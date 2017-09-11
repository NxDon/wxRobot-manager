/*用户加机器人好友状态：数据库创建用户新状态，并给用户返回文本信息*/
const UserStatus = require('../model/userInfos');

class queryName {
    handler(userId, message, callback) {
        UserStatus.update({userId: userId},{status: 'joinCityGroup',userRealName:message.text}, (err) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, { type: 'Text', info: `名字信息录入成功，请输入城市名称，例如：西安、北京、成都、武汉`})
        });
    }
}

module.exports = queryName;