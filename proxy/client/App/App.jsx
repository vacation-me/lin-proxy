import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

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
