const mongoose = require('mongoose');
const UserSchema = require('./schema');

const modelUser = mongoose.model('user', UserSchema);

module.exports = modelUser;