const idea_controller = require("../controllers/idea.controller");

module.exports = (app) => {
    // app.get use here for acess the store data

  app.get("/ideaApp/api/v1/ideas", idea_controller.getAllIdeas);

  // app.get  on idea on id based 
  app.get("/ideaApp/api/v1/ideas/:id", idea_controller.getIdeaBasedOnId);

  // app.post use here for crat new idea
  app.post("/ideaApp/api/v1/ideas", idea_controller.createIdea);

  //app.put here upadte the idea through id 
  app.put("/ideaApp/api/v1/ideas/:id", idea_controller.updateIdea);

  // app.delete for delete the data from db 
  app.delete("/ideaApp/api/v1/ideas/:id", idea_controller.deleteIdea);
};
