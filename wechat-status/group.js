const UserStatus = require('../model/userStatus');

class Group {
  showText() {
    return {type: 'Group', info: ''};
  }

  handler(groupId, message, userId, callback) {
    UserStatus.create({userId: groupId, status: 'topic'},(err) => {
      if(err){
        return callback(err, null);
      }
      return callback(null, this.showText());
    });
  }
}

module.exports = Group;