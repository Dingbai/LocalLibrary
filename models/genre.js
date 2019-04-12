const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genre = new Schema({
    name:{type:String,require:true,min:3,max:100},
});

// 虚拟属性'url'：藏书副本 URL
genre
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

// 导出 BookInstancec 模型
module.exports = mongoose.model('genre', genre);