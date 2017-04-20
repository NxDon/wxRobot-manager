const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Srct {
  showText() {
    return '请如入你的性别';
  }

  handler(userId, str,callback) {
    async.waterfall([
      (done) => {
        User.update({userId: userId}, {city: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId},{status:'srxb'},done);
      }
    ],(err) => {
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());

    });
  }
}

module.exports = Srct;