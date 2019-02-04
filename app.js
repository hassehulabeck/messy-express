const express = require('express');
const app = express();
var port = 3000;

app.get('/', (req, res) => {
  // Skicka svar på root-request (localhost:3000)
  res.send(`Hallå från port ${port}`);
})

// Skicka svar på request till localhost:3000/hej
app.get('/hej', (req, res) => {
  res.send(`Localhost:${port} säger "Hej"`);
})

// Skicka svar med en fil på request till localhost:3000/about
var options = {root: __dirname}; // Vi måste säga till var filen finns.
app.get('/about', (req, res) => {
  res.sendFile("about.html", options, (err) => {
    if (err){
      console.error(err);
    }
  });
})

// Skicka svar med en fil på request till localhost:3000/om-oss
var options = {root: __dirname + '/se'};
app.get('/om-oss', (req, res) => {
  res.sendFile("om-oss.html", options, (err) => {
    if (err){
      console.error(err);
    }
  });
})

/* Nedan följer två exempel där vi ur URL utvinner parametrar eller querys.
parametrar följer direkt i URLen,
medan queries följer på ett frågetecken.
*/

// Skicka svar på request till localhost:3000/user/23 eller vad vi skriver för något id.
app.get('/user/:userid', (req, res) => {
  res.send(`Information om användare ${req.params.userid}`);
})

// Skicka svar på requst till localhost:3000/products?category=33
app.get('/products', (req,res) => {
  res.send(`Du önskar information om kategori ${req.query.category}`)
})

app.listen(port, () => {
  console.log(`Nu lyssnar jag på ${port}`);
})
