const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {}, //Use Mongoose's ObjectId data type, default value is set to a new ObjectId
  reactionBody: { type: String, required: true }, //280 character maximum}
  username: { type: String, required: true },
  createdAt: { type: Date }, //Set default value to the current timestamp, use a getter method to format the timestamp on query
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
