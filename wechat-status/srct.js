const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
const Validate = require('../tool/validate');
const async = require('async');

class Srct {
  constructor() {
    this.validate = new Validate();
    this.realType = [{type: 'Text'}];
    this.realCity = [{city: '成都'}, {city: '北京'}, {city: '西安'},
      {city: '武汉'}, {city: '深圳'}, {city: '上海'}];
  }

  showText(city) {
    switch (city) {
      case '成都': return {type: 'add_member', info: '成都学员群'};
      case '北京': return {type: 'add_member', info: '北京学员群'};
      case '深圳': return {type: 'add_member', info: '深圳学员群'};
      case '上海': return {type: 'add_member', info: '上海学员群'};
      case '西安': return {type: 'add_member', info: '西安学员群'};
      case '武汉': return {type: 'add_member', info: '武汉学员群'};
      default: return {type: 'add_member', info: '上海学员群'};
    }
  }

  handler(userId, message, callback) {
    async.waterfall([
      (done) => {
        if (this.validate.check(message.type, this.realType) && message.text === 'q') {
          UserStatus.update({userId: userId}, {status: 'choice'}, (err) => {
            done(null, {text: constant.validate.info});
          });
        } else if (this.validate.check(message.type, this.realType) &&
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
          UserStatus.update({userId: userId}, {status: 'finish'}, done);
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