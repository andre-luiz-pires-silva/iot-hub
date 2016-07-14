var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({
    ip: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    description: {
      type: String,
      required: false
    },
  });

  return mongoose.model('Device', schema);

};
