var express = require('express');
var app = express();
const PORT = process.env.PORT || 3001;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("client");
});

// Code to run SERVER
app.listen(PORT, () => {
  console.log(`Server listening o PORT ${PORT}...`)
})
