const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AnswerSchema = new Schema({
  answer: String,
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  questionId: {
    type: Schema.ObjectId,
    ref: 'Question'
  }
});

module.exports = mongoose.model('Answer', AnswerSchema);