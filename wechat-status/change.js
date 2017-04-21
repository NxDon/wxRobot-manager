const UserStatus = require('../model/userStatus');

class Info {
  showText() {
    return {type: 'Text', info: '1.完善资料;2.助教；3.合作'};
  }

  handler(userId, message, callback) {
    UserStatus.update({userId: userId, status: 'choice'},(err) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Info;