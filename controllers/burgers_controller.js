const express = require("express");
//--Import burger.js 
const burger = require("../models/burger.js");
//---Router for application
const router = express.Router();

//---Create all our routes and set up logic within those routes where required.
//---Router "get"
router.get("/", function(req, res) {
    burger.selectAll(function(data) { //the third layer for the cb function
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
//---Router "post"
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
//---Router "put"
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js
module.exports = router;