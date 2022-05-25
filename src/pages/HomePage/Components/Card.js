import React from "react";
import "./css/card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.items.img} alt="" />
      <p>{props.items.title}</p>
      <div className="desc">{props.items.desc}</div>
      <button>More</button>
    </div>
  );
}
