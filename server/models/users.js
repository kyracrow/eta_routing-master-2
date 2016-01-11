var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String
});

module.exports = mongoose.model("User", UserSchema);

/*
possibilities with mongoose:
{
username: {type:String, required: true, index: {unique:true}},
lastlogin: {type: Date, default: Date.now }
}
 */
