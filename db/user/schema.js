const { Schema } = require('mongoose');

const ProfileSchema = {
    fullname: String,
    post: String,
};
const UserSchema = new Schema({
    email: String,
    profile: ProfileSchema,
    services: Object,
});

module.exports = UserSchema;
