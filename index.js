const mongoose = require('mongoose');
const { User, Question, Answer, Vote } = require('./db');

mongoose.connect('mongodb://localhost:27017/TestingMongoose')
    .then(() => console.log('done'))
    .catch(err => console.error(err));

const go = async () => {
  const user = {
    email: 'mail@mail.ua',
    profile: {
      fullName: 'FirstName, SecondName'
    }
  };
  const newUser = await User.create(user);

  const question = {
    title: 'Title',
    description: 'Description',
    createdById: newUser._id,
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4']
  };
  const newQuestion = await Question.create(question);
  
  const answer = {
    title: 'Title',
    description: 'Description',
    questionId: newQuestion._id,
    createdById: newUser._id
  };
  const newAnswer = await Answer.create(answer);

  const vote = {
    isPositive: true,
    answerId: newAnswer._id,
    createdById: newUser._id
  };
  const newVote = await Vote.create(vote);

};
go();
