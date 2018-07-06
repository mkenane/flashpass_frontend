import React, { Component } from "react";
import EventList from "./EventList";

class EventListContainer extends Component {
  constructor() {
    super();

    this.state = {
      allEvents: [],
      userLocalEvents: [],
      chosenEvent: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ allEvents: jsonresp }));
  }

  render() {
    return (
      <div>
        <EventList events={this.state.allEvents} />
      </div>
    );
  }
}

export default EventListContainer;
