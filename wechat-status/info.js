const UserStatus = require('../model/userStatus');
const NickName = (Math.random().toString(36)+'').substr(2,8);

class Info {
  showText() {
    return {type: 'text', info: '1.完善资料;2.助教；3.合作', NickName: NickName};
  }

  handler(userId, message, callback) {
    UserStatus.create({userId: NickName, status: 'choice'},(err) => {
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Info;