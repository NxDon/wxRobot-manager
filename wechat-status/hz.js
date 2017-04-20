const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Wszl {

  showText() {
    return {type:'text', info: '请输入合作的邮箱地址'};
  }

  handler(userId, str, callback) {
    async.waterfall([
      (done) => {
        User.create({userId: userId, name: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId},{status:'email'}, done);
      }
    ],(err) => {
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Wszl;