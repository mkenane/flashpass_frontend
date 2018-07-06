import React, { Component } from "react";
import EventList from "./EventList";
import { Card, Icon, Image } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import Queue from "./Queue";

class NewEvent extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      date: "",
      description: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Add an Event !</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default NewEvent;
