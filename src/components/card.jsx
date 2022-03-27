import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 class="name">{props.name}</h2>
        <img class="circle-img" src="{props.source}" alt="avatar_img" />
      </div>
      <div className="bottom">
        <p class="info">{props.number}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
