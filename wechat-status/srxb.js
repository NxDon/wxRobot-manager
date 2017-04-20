const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const async = require('async');

class Srct {
  showText() {
    return {type:'club', info: 'club'};
  }

  handler(userId, str,callback) {
    async.waterfall([
      (done) => {
        User.update({userId: userId}, {sex: str}, done);
      },
      (data, done) => {
        UserStatus.update({userId: userId, status: 'info'}, done);
        // if (str === '男'){
        //   UserStatus.update({userId: userId},{status:'TW5'},done);
        // } else {
        //   UserStatus.update({userId: userId},{status:'推送club'},done);
        //
        // }
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