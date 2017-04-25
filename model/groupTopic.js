const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GroupTopicSchema = new Schema({
  topic: String,
  userId: String,
  groupId: String
});

module.exports = mongoose.model('GroupTopic', GroupTopicSchema);