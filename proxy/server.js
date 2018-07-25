const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(`${__dirname}/public`, "index.html"));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
