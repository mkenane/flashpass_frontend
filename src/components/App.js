import React, { Component } from "react";
import EventListContainer from "./EventListContainer";
import NewEvent from "./NewEvent";

class App extends Component {
  render() {
    return (
      <div>
        <EventListContainer />
        <NewEvent />{" "}
      </div>
    );
  }
}

export default App;
