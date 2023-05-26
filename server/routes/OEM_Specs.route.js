const express = require("express");
const OEMModel = require("../model/OEM.model");

const OEM_SpecsRoute = express.Router();




//get all post from OEMModel
  OEM_SpecsRoute.get("/", async (req, res) => {
    try {
      const notes = await OEMModel.find();
      res.send(notes.reverse());
    } catch (error) {
      console.log(error)
    }
  
  });

//create a post



  OEM_SpecsRoute.post("/", async (req, res) => {
    const newPost = new OEMModel(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = {
    OEM_SpecsRoute
  };