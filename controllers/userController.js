const { User } = require("../models/models");

const userController = {
  addUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const saveUser = await user.save();
      res.status(200).json(saveUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUSer: async (req, res) => {
    try {
      const getall = await User.find();
      res.status(200).json(getall);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAnUSer : async(req,res)=>{
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  UpdateAnUSer:async(req,res)=>{
    try {
      const userID = await User.findById(req.params.id);
      await userID.updateOne({$set : req.body})
      res.status(200).json("Update Successfully !");     
    } catch (error) {
      res.status(500).json(error)
    }
  },
  deleteAnUSer:async(req,res)=>{
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully !");     
    } catch (error) {
      res.status(500).json(error)
    }
  }
};

module.exports = userController;
