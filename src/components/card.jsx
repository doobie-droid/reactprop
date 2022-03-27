import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 class="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <p class="info">{props.number}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
