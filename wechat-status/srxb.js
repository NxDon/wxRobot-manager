const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Srct {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'Text'}];
    this.realSex = [{sex: '男'}, {sex: '女'}];
  }

  showText(sex) {
    if (sex === '男') {
      return {type: 'Group', info: '20f2112t'};
    }
    return {type: 'Group', info: 'fafaf4a9'};
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        if (this.validate.check(message.type, this.realType) &&
            this.validate.sex(message.text, this.realSex)) {
          User.update({userId: userId}, {sex: message.text}, done);
        } else {
          done(null, {text: constant.validate.err});
        }
      },
      (data, done) => {
        if (data.text) {
          done(null, data);
        } else {
          UserStatus.update({userId: userId, status: 'change'}, done);
        }
      }
    ], (err, data) => {
      if (err) {
        return callback(err, null);
      }
      if (data.text) {
        return callback(null, data.text);
      }
      return callback(null, this.showText(message.text));

    });
  }
}

module.exports = Srct;