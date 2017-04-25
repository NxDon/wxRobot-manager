const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TopicAnswerSchema = new Schema({
  answer: String,
  userId: String,
  topicId: String
});

module.exports = mongoose.model('TopicAnswer', TopicAnswerSchema);