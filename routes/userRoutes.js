const express = require('express');
var router = express.Router();
var users = require('../users.json');

function returnUser(uID) {
  return users.find(user => user.userID == uID);
};

router.get("/", (req, res) => {
  res.json(users);
});

router.use("/:userID", (req, res, next) => {
  let uID = req.params.userID;
  let user = returnUser(uID);
  res.json(user);
  next();
});

module.exports = router;
