const { Schema, model } = require("mongoose");

//Right place to have subdoc schema in the Thought model???
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true }, //must be between 1 and 280 characters}
  createdAt: { type: Date }, //Set default value to the current timestamp, use a getter method to format the timestamp on query}
  //The user that created this thought
  username: { type: String, required: true },
  //These are like replies
  reactions: {}, //array of nested documents created with the 'reaction" schema}
});

thoughtSchema
  .virtual("reactionCount")
  //retrieves the length of the thought's reaction array field on query
  .get(function () {
    return;
  });

module.export = Thought;
