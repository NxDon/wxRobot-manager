const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
 userId: String,
 name: String,
 city: String,
 sex: String,
 language: String
});

module.exports = mongoose.model('User', UserSchema);