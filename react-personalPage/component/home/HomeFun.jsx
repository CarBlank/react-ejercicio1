import React from "react";

export const Home = (props) => {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h3> Hey I am {props.name} {props.surname} and I am {props.abilities} </h3>
    </div>
  );
};
