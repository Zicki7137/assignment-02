const express = require("express");
const app = express();

app.get("/index.html", (req, res) => {
  res.sendFile (__dirname + "/index.html");
});

app.get("/image.html", (req, res) => {
    res.sendFile (__dirname + "/image.html");
  });

app.get("/contact-us.html", (req, res) => {
    res.sendFile (__dirname + "/contact-us.html");
  });

  
app.get("/about.html", (req, res) => {
    res.sendFile (__dirname + "/about.html");
  });

app.listen(3000, () => {
  console.log("Server starting up at: port:3000:");
});
