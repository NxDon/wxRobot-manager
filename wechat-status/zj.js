const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Wszl {

  showText() {
    return {type:'text', info: '请输入你所在城市'};
  }

  handler(userId, str, type, callback) {
    async.waterfall([
      (done) => {
        User.create({userId: userId, name: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId},{status:'zjct'}, done);
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