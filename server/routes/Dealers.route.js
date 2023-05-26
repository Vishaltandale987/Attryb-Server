const DealersModel = require("../model/Dealers.modal");
const express = require("express");
const DealersRoute = express.Router();


//get all post from DealersModel
// 
DealersRoute.get("/", async (req, res) => {
    try {
      const notes = await DealersModel.find();
      res.send(notes.reverse());
    } catch (error) {
      console.log(error)
    }
  
  });




//create a post

DealersRoute.post("/", async (req, res) => {
  const newPost = new DealersModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err);
  }
});


// get post by id

DealersRoute.get("/:id", async (req, res) => {
  try {
    const post = await DealersModel.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete
DealersRoute.delete("/:id", async (req, res) => {
  // if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await DealersModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Post has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  
});

// update


DealersRoute.put("/:id", async (req, res) => {

  let post_id = req.params.id
  let obj = req.body

  // console.log(post_id, obj)



    try {
      const user = await DealersModel.findByIdAndUpdate(post_id, {
        $set: obj,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  


});



module.exports = {
    DealersRoute,
  };
