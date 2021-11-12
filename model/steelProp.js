const mongoose = require("mongoose");

const steelSchema = new mongoose.Schema({
  mark: {
    type: String,
  },
  0: {
    type: Number,
  },
  50: {
    type: Number,
  },
  100: {
    type: Number,
  },
  150: {
    type: Number,
  },
  200: {
    type: Number,
  },
  250: {
    type: Number,
  },
  300: {
    type: Number,
  },
  350: {
    type: Number,
  },
  400: {
    type: Number,
  },
  450: {
    type: Number,
  },
  500: {
    type: Number,
  },
  550: {
    type: Number,
  },
  600: {
    type: Number,
  },
  650: {
    type: Number,
  },
  700: {
    type: Number,
  },
  750: {
    type: Number,
  },
  800: {
    type: Number,
  },
  850: {
    type: Number,
  },
  900: {
    type: Number,
  },
  950: {
    type: Number,
  },
  1000: {
    type: Number,
  },
  1050: {
    type: Number,
  },
  1100: {
    type: Number,
  },
  1150: {
    type: Number,
  },
});

const SteelProp = mongoose.model("SteelProp", steelSchema);

module.exports = SteelProp;
