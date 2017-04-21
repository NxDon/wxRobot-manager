const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Srct {
  showText() {
    return {type:'club', info: 'club'};
  }

  handler(userId, str, type, callback) {
    async.waterfall([
      (done) => {
        User.update({userId: userId}, {sex: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId, status: 'change'}, done);
      }
    ],(err) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, this.showText());

    });
  }
}

module.exports = Srct;