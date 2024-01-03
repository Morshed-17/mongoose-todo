const express = require("express");

const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

require("./config/db")();

const mainRouter = require("./routers/api");
app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
