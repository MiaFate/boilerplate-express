let express = require('express');
let app = express();

//const handler = (req, res) => {
//  res.send("Hello Express")
//}
const absolutePath = __dirname + '/views/index.html'
app.get("/", (req, res) => {
  res.sendFile(absolutePath)
})


































module.exports = app;
