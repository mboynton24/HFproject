const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({

    email: {type: String, required:true, unique:true},
    username: {type: String, required:true, min:4, unique:true},
    password: {type: String, required:true, unique:false},

});

const UserModel = model('Username', UserSchema);
module.exports = UserModel;