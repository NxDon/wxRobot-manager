const {Router} = require ('express');
const AnswerController = require ( '../../controller/answer-controller');


const router = Router();
const answerCtrl = new AnswerController();

router.get('/', answerCtrl.getAll);

module.exports = router;