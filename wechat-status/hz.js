const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Wszl {
    constructor() {
      this.validate = new Validate();
      this.realType = [{type: 'Text'}];
    }

  showText() {
    return {type:'Text', info: '请输入合作的邮箱地址'};
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        if (this.validate.check(message.type, this.realType)) {
          User.create({userId: userId, name: message.text}, done);
        } else {
          done(null, {text: constant.validate.err});
        }
      },
      (data, done) => {
        if (data.text){
          done(null, data);
        } else {
          UserStatus.update({userId: userId},{status:'email'}, done);
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