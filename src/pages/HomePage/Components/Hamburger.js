import React from "react";
import './css/hamburger.css'
export default function Hamburger(props) {
  

  return (
    <div className="hamburger" onClick={props.toggleSide}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}
