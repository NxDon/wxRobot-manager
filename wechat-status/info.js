const UserStatus = require('../model/userStatus');

class Info {
  showText() {
    return {
      type: 'Text', info: `请选择您的角色[请输入序号]:  
    1.我要当学员
    2.我要当助教
    3.我想合作`
    };
  }

  handler(userId, message, callback) {
    UserStatus.create({userId: userId, status: 'choice'}, (err) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Info;