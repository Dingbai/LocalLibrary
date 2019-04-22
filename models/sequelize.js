const Sequelize = require('sequelize')
const db = require('../mysql')
const User = db.define(
  'user',
  {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

// force: true 如果表已经存在，将会丢弃表
User.sync({ force: true }).then(() => {
  // 表已创建
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
})
module.exports = User
