var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var domSchema = new Schema({ dropzone: {} });

module.exports = mongoose.model('Dom', domSchema);