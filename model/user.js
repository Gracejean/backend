var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var user = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }

},
  { collection: 'account' }
);

var User = mongoose.model('User', user);

module.exports = User