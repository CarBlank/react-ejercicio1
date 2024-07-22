import React from "react"

export const Header = (props) => {
  return (
    <div className="App">
      <span>{props.description}</span>
      <br />
      <span>Experience: {props.experience}</span>
      <br />
      <span>Hobbies: {props.hobbies}</span>
    </div>
  )
}
