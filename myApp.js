require("dotenv").config();
let express = require('express');
let app = express();
//__dirname/public is mounted in /public dir of our website
app.use("/public", express.static(__dirname + "/public"))
//const handler = (req, res) => {
//  res.send("Hello Express")
//}

//middleware for all routes
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
});
//sendfile in the route response
const absolutePath = __dirname + '/views/index.html'
app.get("/", (req, res) => {
  res.sendFile(absolutePath)
});

//sending jason
app.get("/json", (req, res) => {
  let message = "Hello json"

  res.json({ "message": `${process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message}` })
});

//chaining middleware in /now route
app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ "time": `${req.time}` })
})


































module.exports = app;
