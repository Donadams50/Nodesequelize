module.exports = app => {
    const tutorials = require("../tutorial/tutorial.controller.js");
  
    // var router = require("express").Router();
  
    // Create a new Tutorial
    app.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    app.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    app.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    app.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    app.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    app.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    app.delete("/", tutorials.deleteAll);
  

  };