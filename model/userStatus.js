const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserStatusSchema = new Schema({
 userId: String,
 status: String,
});

module.exports = mongoose.model('UserStatus', UserStatusSchema);