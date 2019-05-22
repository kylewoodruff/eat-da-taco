let express = require("express");

let apiRouter = express.Router();

// Import the model (cat.js) to use its database functions.
let taco = require("../models/tacos");

// Create all our routes and set up logic within those routes where required.
apiRouter.get("/", function(req, res) {
  taco.all(function(data) {
    let tacosObject = {
      tacos: data
    };
    console.log(tacosObject);
    res.render("index", tacosObject);
  });
});

apiRouter.post("/api/tacos", function(req, res) {
  taco.create([
    "taco_name", "devoured"
  ], [
    req.body.taco, req.body.devoure
  ], function(result) {
    
    res.json({ id: result.insertId });
  });
});

apiRouter.put("/api/tacos/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.update({
    devoured: req.body.devoure
  }, condition, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

apiRouter.delete("/api/tacos/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  taco.delete(condition, function(result) {
    if (result.affectedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = apiRouter;