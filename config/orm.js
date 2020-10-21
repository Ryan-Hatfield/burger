// Requirements
const connection = require("./connection.js");

//---
const orm = {

//---SelectALL method
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";", function(err, res) {
            if (err) throw err;
            // console.log(res);
            cb(res);
        });
    },

//---insertOne Method
    insertOne: function(table, value, cb) {
        connection.query("INSERT INTO" + table + " SET ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },

//---UpdateOne Method
    updateOne: function(table, condition, id, cb) {
        connection.query("UPDATE" + table + "SET" + condition + "WHERE id = ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },
}

//---Export orm.js
module.exports = orm;