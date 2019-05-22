var connection = require("./connection.js");

var orm = {
    select: function(colName, tableName) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [colName, tableName], function(err, data) {
        if (err) throw err;
        console.log(data);
      });
    },
    selectWhere: function(tableName, colName, dataOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [tableName, colName, dataOfCol], function(err, data) {
        if (err) throw err;
        console.log(data);
      });
    }
}

module.exports = orm;