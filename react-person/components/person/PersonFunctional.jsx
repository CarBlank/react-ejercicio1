import React from "react";

export const Person = (props) => {
  return (
    <div className="App">
      <span>Name: {props.name}</span>
      <br />
      <span>Surname: {props.surname}</span>
      <br />
      <span>Age: {props.age}</span>
      <hr />
    </div>
  );
};
