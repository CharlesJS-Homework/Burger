const orm = require('../config/orm.js');

module.exports = {
  list: orm.selectAll,

  add: name => orm.insertOne(name, false),

  eat: id => orm.updateOne(id, null, true),
};
