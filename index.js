const express = require("express");

const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

require("./config/db")();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
