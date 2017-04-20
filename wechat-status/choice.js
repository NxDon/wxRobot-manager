const UserStatus = require('../model/userStatus');

class Info {
  showText() {
    return '请输入你的姓名';
  }

  handler(userId, str, callback) {
    console.log(str, 'str------');
    const status = str === '1' ? 'wszl':str === '2' ? 'zj':'hz';
    console.log(status, 'get status====');
      UserStatus.update({userId: userId, status: status},(err) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, this.showText());
      });
    }
}

module.exports = Info;