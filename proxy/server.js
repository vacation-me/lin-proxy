const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/search", express.static(path.join(__dirname, "public")));
app.use("/search/:searchId", express.static(path.join(__dirname, "public")));
app.use("/listing/:listingId", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
