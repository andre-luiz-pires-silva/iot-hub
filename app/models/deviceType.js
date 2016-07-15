var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    }
  });

  return mongoose.model('DeviceType', schema);

};