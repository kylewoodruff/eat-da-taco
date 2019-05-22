let orm = require("../config/orm.js");

const taco = {
  all: function(callback) {
    orm.all("tacos", function(res) {
      callback(res);
    });
  },
  // The variables colNames and values are arrays.
  create: function(colNames, values, callback) {
    orm.create("tacos", colNames, values, function(res) {
        callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("tacos", objColVals, condition, function(res) {
        callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("tacos", condition, function(res) {
        callback(res);
    });
  }
};


module.exports = taco;
