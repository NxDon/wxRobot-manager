const {Router} = require ('express');
const QuestionController = require ( '../../controller/question-controller');


const router = Router();
const questionCtrl = new QuestionController();

router.get('/', questionCtrl.getAll);

module.exports = router;