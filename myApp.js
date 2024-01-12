let express = require('express');
let app = express();

const handler = (req, res) => {
  res.send("Hello Express")
}
app.get("/", handler)


































module.exports = app;
