import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route
        path="/search/:searchQuery"
        render={props => (
          <div>
            <Navbar {...props} />
            <Results {...props} />
          </div>
        )}
      />
      <Route
        path="/listing/:listingId"
        render={props => (
          <div>
            <Navbar {...props} />
            <div id="photosContainer">
              <Photos {...props} />
            </div>
            <div id="listingContainer">
              <div id="infoContainer">
                <Details {...props} />
                <Reviews {...props} />
              </div>
              <Book {...props} />
            </div>
          </div>
        )}
      />
    </div>
  </BrowserRouter>
);

module.exports = App;

//     React.createElement(
//       "div",
//       { id: "photosContainer" },
//       React.createElement(Route, {
//         path: "/listing/:listingId",
//         component: Photos
//       })
//     ),
//     React.createElement(
//       "div",
//       { id: "listingContainer" },
//       React.createElement(
//         "div",
//         { id: "infoContainer" },
//         React.createElement(Route, {
//           path: "/listing/:listingId",
//           component: Details
//         }),
//         React.createElement(Route, {
//           path: "/listing/:listingId",
//           component: Reviews
//         })
//       ),
//       React.createElement(Route, {
//         path: "/listing/:listingId",
//         component: Book
//       })
//     )
//   )
// );
