let orm = require("../config/orm.js");

const taco = {
  all: function(cb) {
    orm.all("tacos", function(res) {
      cb(res);
    });
  },
  // The variables colNames and values are arrays.
  create: function(colNames, values, cb) {
    orm.create("tacos", colNames, values, function(res) {
        cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tacos", objColVals, condition, function(res) {
        cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tacos", condition, function(res) {
        cb(res);
    });
  }
};


module.exports = taco;
