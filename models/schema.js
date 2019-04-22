const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SomeModel = new Schema({
  a_string: String,
  a_date: Date
})

const Model = mongoose.model('model', SomeModel)
