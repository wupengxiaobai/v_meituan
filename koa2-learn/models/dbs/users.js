const mongooes = require('mongoose')
const Schema = mongooes.Schema;

//  创建一个用户schema
const userSchema = new Schema({
  name: String,
  age: Number,
  gender: String
})
//  通过 Schema 创建 模型
var userModel = mongooes.model('User', userSchema)

module.exports = userModel