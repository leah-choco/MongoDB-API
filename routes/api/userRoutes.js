const router = require("express").Router();

//Requiring the user controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

// All the comments throughout are the specific paths
// '/api/users'
router.route("/").get(getUsers).post(createUser);

// '/api/users/:userId'
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// '/api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
