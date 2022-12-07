const { Schema, model } = require("mongoose");

const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleDateString(),
    },
    //The user that created this thought
    username: { type: String, required: true },
    //array of nested documents created with the 'reaction" schema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema
  .virtual("reactionCount")
  //retrieves the length of the thought's reaction array field on query
  .get(function () {
    return this.reactions.length;
  });

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
