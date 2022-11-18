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

function verifyToken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request');
  }
  let token=req.headers.authorization.split(' ')[1];
  if(token==='null'){
    return res.status(401).send('Unauthorized request');
  }
  let payload=jwt.verify(token,'secretKey')
  if(!payload){
    return res.status(401).send('Unauthorized request');
  }
  req.userId=payload.subject;
  next();
}

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
        "Event 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "2",
      name: "Event 2",
      description:
        "Event 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "3",
      name: "Event 3",
      description:
        "Event 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
  ];
  res.json(events);
});

router.get("/member",verifyToken, (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Member Event 1",
      description:
        "Member Event 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "2",
      name: "Member Event 2",
      description:
        "Member Event 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
    {
      _id: "3",
      name: "Member Event 3",
      description:
        "Member Event 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      date: "2022-11-4T18:25:43",
    },
  ];
  res.json(events);
});
module.exports = router;
