const User = require('../models/sequelize')
console.log(User)
console.log('enter')
exports.index = (req,res,next) {
  User.findAll().then(users => {
    console.log(users)
  })
}