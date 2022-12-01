var express = require('express');
var app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Code to run SERVER
app.listen(PORT, () => {
  console.log(`Server listening o PORT ${PORT}...`)
})
