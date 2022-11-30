const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true }, //must be between 1 and 280 characters}
  createdAt: { type: Date }, //Set default value to the current timestamp, use a getter method to format the timestamp on query}
  //The user that created this thought
  username: { type: String, required: true },
  //These are like replies
  reactions: {}, //array of nested documents created with the 'reaction" schema}
});

//Using mongoose.model() to compile a model based on the schema 'thoughtSchema'
const Thought = mongoose.model("Thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.export = Thought;
