const mongoose = require('mongoose');

const constrSchema = new mongoose.Schema({
  mark: {
    type: String,
  },
  values: [
    {
      type: Number,
    },
  ],
});

const ConstrProp = mongoose.model('ConstrProp', constrSchema);

module.exports = ConstrProp;
