const { Schema, model } = require("mongoose");

//Research  unique and trimmed
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    //trimmed?
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //must match a vaild email address
  },
  thoughts: [], //array of id values referencing thought model
  friends: [], //array of id values referencing user(self-reference)
});

//Retrieves the length of the user's friends array field on query
userSchema
  .virtual("friendCount")
  //getter
  .get(function () {
    return;
  });

module.export = User;
