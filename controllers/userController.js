const { User } = require("../models/models");

const userController = {
  addUser: async (req, res) => {
    var user = new User({
      userID: req.body.userID,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    // result = User.addUser(user);
    user.save().then(
      (user) => {
        res.send(user);
      },
      (e) => {
        res.status(400).send(e);
      }
    );
  },

  getUSer: async (req, res) => {
    User.find().then(
      (user) => {
        res.send({ user });
      },
      (e) => {
        res.status(400).send(e);
      }
    );
  },
};

module.exports = userController;
