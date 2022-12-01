const express = require("express");
const db = require("./config/connection");
// Require model
const { Book, User } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get all users
app.get("/api/users", (req, res) => {
  User.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log("Something went wrong");
      res.status(500).json({ message: "Something went wrong" });
    }
  });
});

//Gets single user by its id and populated thought and friend data
app.get("/api/users", (req, res) => {
  User.findOne({id: }, (err, result) =>{
    if(result) {
      res.status(200).json(result);
    }else{
      console.log('User not found');
      res.status(500).json({ message: 'user not found'});
    }
  });
});

//Posts a new user
app.post("/api/users", (req,res) => {
  const newUser = new User({ username: req.params.user, email: });
  newUser.save();
  if (newUser) {
    res.status(200).json(newUser);
  }else{
    console.log('Something went wrong');
    res.status(500).json({ message: 'something went wrong'});
  }
});

//Update a user by its id
app.put('/api/users/:id', (req,res) => {
  User.findOneAndUpdate(
    {id:""},
    {id: req.params.user},
    {new: true},
    (err, result) => {
      if(result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('something went wrong');
        res.status(500).json({ message: "something went wrong"});
      }
    }
  );
});

//Delete user by id
app.delete('/api/users/:id', (req,res) => {
  User.findOneAndDelete({ id}, (err, result) => {
    if(result) {
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } else {
      console.log('something went wrong');
      res.status(500).json({ message: "somethinh went wrong"});
    }
  });
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
