const {Router} = require ('express');
const UserController = require ( '../../controller/user-controller');


const router = Router();
const userCtrl = new UserController();

router.post('/', userCtrl.save);

module.exports = router;