let express = require("express");

let apiRouter = express.Router();

// Import the model (cat.js) to use its database functions.
let taco = require("../models/tacos");

// Create all our routes and set up logic within those routes where required.
apiRouter.get("/", function(req, res) {
  taco.all(function(data) {
    let hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

apiRouter.post("/api/tacos", function(req, res) {
  console.log(req.body.name);
  
  taco.create(["taco_name"],[req.body.name], function(result) {

    res.json({ id: result.insertId });
  });
});

apiRouter.put("/api/tacos/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  // console.log("condition", condition);
  console.log(req.body.devoure);
  
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
