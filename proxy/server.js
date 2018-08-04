const express = require("express");
const proxy = require("http-proxy-middleware");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use("/", express.static("public"));
app.use("/listing/:listingId", express.static("public"));
app.use("/search/:searchQuery", express.static("public"));

/**************************************************************/
// Commented out code below can be activated if you want to run
// this proxy locally, in which case the 5 different
// services need to be running on the appropriate ports.

// navigation
app.use(
  "/api/searchRecords",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-34-217-69-244.us-west-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:2999"
  })
);

app.use(
  "/api/searchListings/:searchQuery",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-34-217-69-244.us-west-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:2999"
  })
);

// details
app.use(
  "/api/details/:listingId",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-54-200-238-109.us-west-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:3001"
  })
);

app.use(
  "/api/details/:listingId/highlights/:highlightId",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-54-200-238-109.us-west-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:3001"
  })
);

// photos
app.use(
  "/api/listing/:listingId",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-18-212-74-66.compute-1.amazonaws.com:80"
    // : "http://127.0.0.1:3002"
  })
);

// reviews
app.use(
  "/reviews/:id",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-18-216-90-61.us-east-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:3003"
  })
);

// bookings
app.use(
  "/api/listings/:listingId",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-13-59-22-40.us-east-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:3004"
  })
);

app.use(
  "/api/submit",
  proxy({
    target:
      // process.env.ENV === "prod"
      "http://ec2-13-59-22-40.us-east-2.compute.amazonaws.com:80"
    // : "http://127.0.0.1:3004"
  })
);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
