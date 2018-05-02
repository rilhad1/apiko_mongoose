const { Schema } = require('mongoose');

const QuestionSchema = new Schema ({
  title: String,
  description: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdById: Schema.Types.ObjectId,
});

module.exports = QuestionSchema;