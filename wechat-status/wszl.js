const UserStatus = require('../model/userStatus');
const User = require('../model/user');
const constant = require('../config/constant');
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
      (done) => {
        // if(type === 'text'){
          UserStatus.update({userId: userId},{status:'srct'}, done);
        // } else {
        //   console.log(type, 'into feifa====');
        //   done(null, constant.validate.text);
        // }
      }
    ],(err, data) => {
      if(err){
        return callback(err, null);
      } else if(data){
        return callback(null, data);
      }else {
        return callback(null, this.showText());
      }
    });
  }
}

module.exports = Wszl;