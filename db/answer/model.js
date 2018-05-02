const mongoose = require('mongoose');
const schema = require('./schema');

const modelAnswer = mongoose.model('answer', schema);

module.exports = modelAnswer;