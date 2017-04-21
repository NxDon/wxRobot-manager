const UserStatus = require('../model/userStatus');

class Info {
  showText() {
    return {type:'text', info: '请输入你的姓名'};
  }

  handler(userId, str, type, callback) {
    const status = str === '1' ? 'wszl':str === '2' ? 'zj':'hz';
      UserStatus.update({userId: userId, status: status},(err) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, this.showText());
      });
    }
}

module.exports = Info;