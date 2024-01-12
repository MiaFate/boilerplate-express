// eslint-disable-next-line
require("dotenv").config();
let express = require('express');
let app = express();
//__dirname/public is mounted in /public dir of our website
app.use("/public", express.static(__dirname + "/public"))
//const handler = (req, res) => {
//  res.send("Hello Express")
//}

//middleware for all routes
app.use(function(req, _, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
});
//sendfile in the route response
const absolutePath = __dirname + '/views/index.html'
app.get("/", (_, res) => {
  res.sendFile(absolutePath)
});

//sending jason
app.get("/json", (_, res) => {
  let message = "Hello json"

  res.json({ "message": `${process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message}` })
});

//chaining middleware in /now route
app.get("/now", function(req, _, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ "time": `${req.time}` })
  /* eslint-disable */
  /* eslint-disable */
})

app.get("/:word/echo", function(req, res) {
  const { word } = req.params;
  res.json({ "echo": `${word}` })
})

app.route("/name").get(function(req, res) {
  const { first, last } = req.query
  res.json({ name: `${first} ${last}` })

})





























module.exports = app;
