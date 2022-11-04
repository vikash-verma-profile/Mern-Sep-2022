const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const db = "mongodb://localhost:27017/eventdb";

mongoose.connect(db, function (err) {
  if (err) {
    console.error("Error !" + err);
  } else {
    console.log("Connected to monogodb");
  }
});

router.post("/register", (req, res) => {
  let userData = req.body;
  console.log(userData);
  let user = new User(userData);
  console.log(user);
  user.save((err, userData) => {
    if (err) {
      console.log(err);
    } else {
      let payload = { subject: userData._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
 // console.log(userData);
  User.findOne({ email: userData.email }, (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
    } else {
      if (!user) {
       // console.log(user);
        res.status(401).send("Invalid Email");
      } else {
        if (user.password != userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Event 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "2",
      name: "Event 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "3",
      name: "Event 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
  ];
  res.json(events);
});

module.exports = router;
