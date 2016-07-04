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
    deviceType: {
      type: mongoose.Schema.ObjectId,
      ref: 'DeviceType'
    }
  });

  return mongoose.model('Device', schema);

};
