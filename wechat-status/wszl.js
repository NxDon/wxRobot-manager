const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Wszl {

  showText() {
    return '请输入你所在城市';
  }

  handler(userId, str, callback) {
    console.log('into wszl handler');
    async.waterfall([
      (done) => {
        User.create({userId: userId, name: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId},{status:'srct'}, done);
      }
    ],(err) => {
      console.log('finfish---');
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Wszl;