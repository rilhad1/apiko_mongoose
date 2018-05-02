const mongoose = require('mongoose');
const VoteSchema = require('./schema');

const modelVote = mongoose.model('vote', VoteSchema);

module.exports = modelVote;