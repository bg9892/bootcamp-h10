var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
   burger.insertOne(["burger_name"], req.body.name, function(result) {
       res.json({ id: result.insertId });
   });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne("devoured", req.body.devoured, req.params.id, function(result) {
        res.json(result);
    })
})

// Export routes for server.js to use.
module.exports = router;