// Requirements
const connection = require("./connection");

//---ORM setup
const orm = {
//---selectALL method
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";", function(err, res) {
            if (err) throw err;
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
//---updateOne Method
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