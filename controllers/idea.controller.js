

const ideas = require("../models/ideas.model")

  let id = 3 


exports.getAllIdeas = async (req, res) => {
      try {
       res.status(200).send(ideas);
      } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
      }
    };


exports.getIdeaBasedOnId = (req, res)=>{

    
    idea_id = req.params.id

    
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message : "Idea with the given idea id not found"
        })
      }

   
    }


exports.createIdea = (req, res)=>{

   
    idea_object = req.body
    id++
    idea_object["id"] = id  
    ideas[id] = idea_object

    
    res.status(201).send(idea_object)
    }


exports.updateIdea = (req, res)=>{
  
  
    idea_id = req.params.id

    
    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)

    }else{
        return res.status(404).send({
            message : "Idea id you wanted to update doesn't exist!"
        })
    }

    
  }

exports.deleteIdea = (req, res)=>{

    
    idea_id = req.params.id

    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message : " you idea has been successfully deleted"
        })
    }else{
       return res.status(404).send({
        message : "Idea id does not exit in data base !"
       })
    }

   
  }