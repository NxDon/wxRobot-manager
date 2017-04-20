const {Router} = require ('express');
const UserStatusController = require ( '../../controller/userStatus-controller');


const router = Router();
const userStatusCtrl = new UserStatusController();

router.post('/', userStatusCtrl.save);

module.exports = router;