var connection = require("./connection.js");

var orm = {
  all: function (tableName, callback) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function (err, data) {
      if (err) {
        throw err;
      }
      // console.log(data);
      callback(data);
    });
  },
  select: function (colName, tableName, callback) {
    let queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colName, tableName], function (err, data) {
      if (err) {
        throw err;
      }
      // console.log(data);
      callback(data);
    });
  },
  selectWhere: function (tableName, colName, dataOfCol) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableName, colName, dataOfCol], function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  }
}

module.exports = orm;