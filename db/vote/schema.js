const { Schema } = require('mongoose');

const ObjectID = Schema.Types.ObjectId;
const VoteSchema = new Schema({
  names: String,
  isPositive: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  answerId: ObjectID,
  createdById: ObjectID,
});

module.exports = VoteSchema;