const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Person', personSchema)