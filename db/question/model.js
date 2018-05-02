const mongoose = require('mongoose');
const QuestionSchema = require('./schema');

const modelQuestion = mongoose.model('question', QuestionSchema);

module.exports = modelQuestion;