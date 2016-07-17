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
      type: String      
    },
    httpBody: {
      type: String
    },
    device: {
      type: mongoose.Schema.ObjectId,
      ref: 'Device'
    }
  });

  return mongoose.model('Command', schema);

};
