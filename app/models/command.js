var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    httpVerb: {
      type: String,
      required: true
    },
    httpPath: {
      type: String,
      required: true
    },
    httpHeader: {
      type: String,
      required: true
    },
    httpBody: {
      type: String,
      required: true
    },
    device: {
      type: mongoose.Schema.ObjectId,
      ref: 'Device'
    }
  });

  return mongoose.model('Command', schema);

};
