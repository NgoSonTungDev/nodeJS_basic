const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

var userSchema = new Schema({
  nameUSer: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateAdded: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

//tu đông tang id//

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, { model: "User", field: "userID" });

module.exports = {
  User,
};
