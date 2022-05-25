import React from "react";
import Card from "./Card";
import data from "../data";
import "./css/main.css";

export default function Main() {

    const cards = data.map(item => (<Card key={item.key} items={item}/>))
    console.log(cards)
  return (
    <div className="main">
        <h1>Sample Heading </h1>
      <div className="main--cards">
        {cards}
      </div>
    </div>
  );
}
