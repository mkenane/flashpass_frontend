import React, { Component } from "react";
import MyEvent from "./MyEvent";
import { Card } from "semantic-ui-react";

class EventList extends Component {
  render() {
    return (
      <Card.Group>
        {this.props.events.map(eventy => {
          return <MyEvent my={eventy} />;
        })}
      </Card.Group>
    );
  }
}

export default EventList;
