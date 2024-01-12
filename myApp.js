let express = require('express');
let app = express();
//__dirname/public is mounted in /public dir of our website
app.use("/public", express.static(__dirname + "/public"))
//const handler = (req, res) => {
//  res.send("Hello Express")
//}
const absolutePath = __dirname + '/views/index.html'
app.get("/", (req, res) => {
  res.sendFile(absolutePath)
})
app.get("/json", (req, res) => {
  res.json({ "message": "Hello json" })
})
































module.exports = app;
