const UserStatus = require('../model/userStatus');

class Info {
  showText() {
    return '1.完善资料;2.助教；3.合作';
  }

  handler(userId, str, callback) {
    UserStatus.create({userId: userId,status:'choice'},(err) => {
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Info;