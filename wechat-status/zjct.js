const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Srct {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'Text'}];
    this.realCity = [{city: '成都'}, {city: '北京'}];
  }

  showText(city) {
    switch (city) {
      case '成都': return {type: 'CourseShop', info: '20f2112t'};
      case '北京': return {type: 'CourseShop', info: 'fafaf4a9'};
      default: return {type: 'CourseShop', info: '20f2112t'};
    }
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        if (this.validate.check(message.type, this.realType) &&
            this.validate.city(message.text, this.realCity)) {
          User.update({userId: userId}, {city: message.text}, done);
        } else {
          done(null, {text: constant.validate.err});
        }
      },
      (data, done) => {
        if (data.text) {
          done(null, data);
        } else {
          UserStatus.update({userId: userId},{status:'change'},done);
        }
      }
    ],(err, data) => {
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