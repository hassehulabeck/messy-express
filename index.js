const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var router = require('./routes/routes.js');
var productRoutes = require("./routes/product-routes.js");
var userRoutes = require('./routes/userRoutes.js');

app.use(express.static(__dirname + '/public'));

var logVisits = function(req, res, next) {
    let input = new Date() + ' ' + req.path + '\n';
    fs.appendFile('accessLog', input, (err) => {
        if (err) throw err;
    });
    next();
}
app.use(logVisits);

app.use("/", router);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Servern lyssnar nu på port ${port}`);
});
