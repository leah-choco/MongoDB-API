const { Schema, model } = require("mongoose");

//Research  unique and trimmed
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //must match a vaild email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ], //array of id values referencing thought model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ], //array of id values referencing user(self-reference)
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

//Retrieves the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
const User = model("user", userSchema);
module.exports = User;
