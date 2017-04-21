const UserStatus = require('../model/userStatus');
const constant = require('../config/constant');
const Validate = require('../tool/validate');

class Info {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'text'}];
  }

  showText() {
    return {type:'text', info: '请输入你的姓名'};
  }

  handler(userId, message, callback) {
    const status = message.info === '1' ? 'wszl':message.info === '2' ? 'zj':'hz';
    if (this.validate.check(message.type, this.realType)) {
      UserStatus.update({userId: userId, status: status},(err) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, this.showText());
      });
    } else {
      return callback(null, constant.validate.err);
    }
    }
}

module.exports = Info;