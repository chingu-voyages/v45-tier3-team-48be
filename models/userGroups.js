const mongoose = require('mongoose');

//change userId type to ObjectID
const userGroupSchema = new mongoose.Schema({
    user_id : String, //references user schema //change
    group_id : { type: mongoose.Schema.Types.ObjectId }, //references group schema
    role : String
});

module.exports = mongoose.model('userGroup', userGroupSchema);