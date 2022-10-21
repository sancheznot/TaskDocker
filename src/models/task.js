const { Schema, model } = require("mongoose");

const tasks = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: Boolean,
});

module.exports = model('task', tasks)
