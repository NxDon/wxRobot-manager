const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Srct {
  showText() {
    return '';
  }

  handler(userId, str,callback) {
    async.waterfall([
      (done) => {
        User.update({userId: userId}, {email: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId},{status:'next'},done);
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