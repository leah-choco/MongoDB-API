const router = require("express").Router();

//Requiring all the thought controllers
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");
//All comments throughout this file are the specific paths
// '/api/thoughts'
router.route("/").get(getThoughts).post(createThought);

// '/api/thoughts/:thoughtId'
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//'/api/thoughts/:thoughtId/reactions'
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
