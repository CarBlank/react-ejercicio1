import React, { Component } from "react";

export default class PersonClass extends Component {
  render() {
    return (
      <div className="App">
        <span>Name: {this.props.name}</span>
        <br />
        <span>Surname: {this.props.surname}</span>
        <br />
        <span>Age: {this.props.age}</span>
        <hr />
      </div>
    );
  }
}
