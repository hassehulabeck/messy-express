const express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Products");
});

router.get("/:productID", (req, res) => {
  res.send(`Info om produkten med produktID ${req.params.productID}`);
});

module.exports = router;
