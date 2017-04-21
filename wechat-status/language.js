const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Srct {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'text'}];
  }

  showText() {
    return {type: 'courseShop', info: 'courseShop'};
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        User.update({userId: userId}, {language: message.info}, done);
      },
      (data, done) => {
        if (this.validate.check(message.type, this.realType)) {
          UserStatus.update({userId: userId}, {status: 'change'}, done);
        } else {
          done(null, {text: constant.validate.err});
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