import React, { Component } from "react";
import EventList from "./EventList";
import { Card, Icon, Image } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import Queue from "./Queue";

class MyEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      formShow: false,
      queueSubmit: false,
      user: "",
      eventid: 0,
      wholeQueue: [],
      hasBeenAdded: false,
      timeCalculation: 0
    };
  }

  handleQueueClick = () => {
    this.setState({ formShow: !this.state.formShow }, () =>
      console.log(this.state)
    );
  };

  handleQueueSubmit = e => {
    this.setState({ eventid: e.target.id }, () =>
      fetch(`http://localhost:3000/events/${this.state.eventid}/spots`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user,
          event_id: this.state.eventid
        })
      })
        .then(resp => resp.json())
        .then(jsonresp => this.setState({ wholeQueue: jsonresp }))
        .then(this.userAdded())
    );
  };

  userAdded = () => {
    this.setState({ formShow: false, hasBeenAdded: true });
    console.log(this.props.my);

    // onepersonentrytime = 60 / this.props.my.peopleperhour
    let onepersonentrytime = 60 / 100;
    // onepersonentrytime = this.state.wholeQueue / this.props.my.peopleperhour
    let minutestoaddtostarttime = 200 * onepersonentrytime;

    let timetoshow = this.props.my.time + minutestoaddtostarttime;

    this.setState({ timeCalculation: timetoshow }, () =>
      console.log(this.state.timeCalculation)
    );
  };

  handleInputChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ user: e.target.value }, () => console.log(this.state.user));
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked }, () =>
      console.log(this.state)
    );
  };

  render() {
    const extraDetails = this.state.clicked ? this.props.my.name : "";
    console.log(this.props.my.name);
    return (
      <Card>
        <Queue />
        <Image src=""> IMAGE</Image>
        <Card.Content>
          <Card.Header>{this.props.my.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.my.date}</span>
            <span className="date">{this.props.my.time} military time</span>
          </Card.Meta>
          {this.state.hasBeenAdded ? (
            <div class="right floated author">
              <i aria-hidden="true" class="clock big icon" />
              youve been added to the line: please show up between{" "}
              {this.state.timeCalculation} - {this.state.timeCalculation + 5}{" "}
              --- no-show fee is ${this.props.my.cancelfee}{" "}
            </div>
          ) : (
            ""
          )}
          <Card.Description> </Card.Description>
        </Card.Content>
        <Card.Content>
          <div class="ui bottom attached button" onClick={this.handleClick}>
            <i class="add icon" />
            See Details
          </div>
          <div>
            <div class="right floated author">
              <button class="ui button" onClick={this.handleQueueClick}>
                Add Me to Queue
              </button>
            </div>

            <div>
              {this.state.formShow ? (
                <div class="right floated author">
                  <Form onSubmit={this.handleQueueSubmit} id={this.props.my.id}>
                    <Form.Field>
                      <Form.Input
                        placeholder="Read Only"
                        readonly=""
                        type="hidden"
                        value={this.props.my.id}
                      />
                      <Form.Input
                        placeholder="First Name"
                        style={{ width: 200 }}
                        onChange={this.handleInputChange}
                        value={this.state.user}
                      />
                    </Form.Field>

                    <Form.Button
                      class="ui button"
                      type="submit"
                      style={{ width: 200 }}
                    >
                      Submit{" "}
                    </Form.Button>
                  </Form>
                  <div class="right floated author">
                    {" "}
                    <button
                      class="ui button"
                      onClick={this.handleQueueClick}
                      style={{ width: 200 }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {this.state.clicked ? (
              <div>
                Description yada yada yada yada Description yada yada yada yada
                Description yada yada yada yada add to queue no-show fee $5
                <div class="left floated author">
                  {" "}
                  <button
                    class="ui button"
                    onClick={this.handleClick}
                    style={{ width: 10, height: 20 }}
                  >
                    X
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default MyEvent;
