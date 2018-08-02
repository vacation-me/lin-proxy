const express = require("express");
const proxy = require("http-proxy-middleware");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use("/", express.static("public"));
app.use("/listing/:listingId", express.static("public"));
app.use("/search/:searchQuery", express.static("public"));

// navigation
app.use(
  "/api/searchRecords",
  proxy({
    target:
      process.env.ENV === "prod"
        ? "http://ec2-34-217-69-244.us-west-2.compute.amazonaws.com:2999"
        : "http://127.0.0.1:2999"
  })
);

app.use(
  "/api/searchListings/:searchQuery",
  proxy({
    target:
      process.env.ENV === "prod"
        ? "http://ec2-34-217-69-244.us-west-2.compute.amazonaws.com:2999"
        : "http://127.0.0.1:2999"
  })
);

// details
app.use(
  "/api/details/:listingId",
  proxy({
    target:
      process.env.ENV === "prod"
        ? "http://ec2-54-200-238-109.us-west-2.compute.amazonaws.com:3001"
        : "http://127.0.0.1:3001"
  })
);

app.use(
  "/api/details/:listingId/highlights/:highlightId",
  proxy({
    target:
      process.env.ENV === "prod"
        ? "http://ec2-54-200-238-109.us-west-2.compute.amazonaws.com:3001"
        : "http://127.0.0.1:3001"
  })
);

// reviews
app.use(
  "/reviews/:id",
  proxy({
    target: "http://127.0.0.1:3003"
  })
);

// bookings
app.use(
  "/api/listings/:listingId",
  proxy({
    target: "http://127.0.0.1:3004"
  })
);

app.use(
  "/api/submit",
  proxy({
    target: "http://127.0.0.1:3004"
  })
);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
