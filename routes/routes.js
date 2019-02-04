const express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Hallå");
});

router.get("/about", (req, res) => {
  var options = {root: './'};
  res.sendFile("about.html", options);
});

router.get("/om-oss", (req, res) => {
  var options = {root: './' + '/se'};
  res.sendFile("om-oss.html", options, (err) => {
    if (err) {
      console.error(err);
    }
  });
})

module.exports = router;
