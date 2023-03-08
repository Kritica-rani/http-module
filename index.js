const express = require("express");
const port = 1000;
const app = express();
const routes = require("./routes/index");

//middleware
app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    return console.log("err", err);
  }
  return console.log("server is up and running");
});
