const UserStatus = require('../model/userStatus');
const constant = require('../config/constant');

class UserStatusController {
    save(req, res, next) {
        console.log('into userStatus controller');
        UserStatus.create(req.body, (err, data) => {
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.CREATED).send(data);
        })
    }
}
module.exports = UserStatusController;

