var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var property = new Schema({
    details: { type: String },
    location: { type: String },
    image: { type: String },
    price: { type: String }

},
    { collection: 'properties' }
);

var Property = mongoose.model('Property', property);

module.exports = Property