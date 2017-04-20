const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
  question: String,
  version: String
});

module.exports = mongoose.model('Question', QuestionSchema);