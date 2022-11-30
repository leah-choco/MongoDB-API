const mongoose = require("mongoose");

//Research  unique and trimmed
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trimmed: true },
  //Must match a valid email address (Mongoose matching validation)
  email: { type: String, required: true, unique: true },

  thoughts: {}, //Array of _id values referencing the Thought model
  friends: {}, //Array of _id values referencing the User model (self-reference)
});

//Using mongoose.model() to compile a model based on
const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.export = User;
