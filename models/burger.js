//---importing the orm.js
const orm = require("../config/orm.js")


const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne("burgers", value, cb, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, id, cb) {
        orm.updateOne("burgers", condition, id, cb, function(res) {
            cb(res);
        });
    }
};

// Export burger
module.exports = burger