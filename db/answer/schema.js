const { Schema } = require('mongoose');

const AnswerSchema = new Schema ({
  description: String,
  title: String,
  questionId: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdById: Schema.Types.ObjectId,
});

module.exports = AnswerSchema;