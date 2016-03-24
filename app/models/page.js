var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({ name: String });

module.exports = mongoose.model('Page', pageSchema);