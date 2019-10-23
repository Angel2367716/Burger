// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

const connection = require("./connection.js");

const orm = {
  all: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
    }
    cb(result);
    });
  },

  // update method
  update: function(tableInput, condition, cb){
    connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';', function (err, result){
      if(err)throw err;
      cb(result);
    })
  },

  // creates burgers
  create: function (tableInput, val, cb){
    connection.query('INSERT INTO' +tableInput+ " (burger_name) VALUES ("+val+");", function(err, result){
      if(err)throw err;
      cb(result);
    })
  }
};
module.exports = orm;
