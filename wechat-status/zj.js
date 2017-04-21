const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Wszl {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'text'}];
  }

  showText() {
    return {type:'text', info: '请输入你所在城市'};
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        User.create({userId: userId, name: message.info}, done);
      },
      (data, done) => {
        if (this.validate.check(message.type, this.realType)) {
          UserStatus.update({userId: userId},{status:'zjct'}, done);
        } else {
          done(null, {text: constant.validate.err});
        }
      }
    ],(err, data) => {
      if (err) {
        return callback(err, null);
      }
      if (data.text) {
        return callback(null, data.text);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Wszl;