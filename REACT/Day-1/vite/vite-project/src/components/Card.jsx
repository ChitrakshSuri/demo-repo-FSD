import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-cont">
      <h2>{props.name}</h2>
      <h4>{JSON.stringify(props.date)}</h4>
      <img src={props.pic} alt="" />
      <h2>{props.roll}</h2>
    </div>
  );
}

export default Card;
