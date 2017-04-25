const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Srct {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'Text'}];
  }

  showText() {
    return {type: 'Text', info: '请如入你的性别'};
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        if (this.validate.check(message.type, this.realType)) {
          User.update({userId: userId}, {city: message.text}, done);
        } else {
          done(null, {text: constant.validate.err});
        }
      },
      (data, done) => {
        if (data.text) {
          done(null, data);
        } else {
          UserStatus.update({userId: userId}, {status: 'srxb'}, done);
        }
      }
    ], (err, data) => {
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

module.exports = Srct;