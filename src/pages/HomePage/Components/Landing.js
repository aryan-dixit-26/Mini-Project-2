import "./css/landing.css";
import React from "react";
import {useHistory} from "react-router-dom"
export default function Landing() {
  let navigate=useHistory();
  let navigatePlay=()=>{
    navigate.push("./memory");
  }
  return (
    <div className="landing">
      <div className="landing--box">
        <div className="landing--box--part p1">
          <h3>About Us</h3>
          <h1>More than 15 different puzzle challenges.</h1>
          <ul>
            <li>
              <img
                src="./images/arrow_list_icon.png"
                alt=""
                className="arrow"
              />
              Shrapen Your Memory.
            </li>
            <li>
              <img
                src="./images/arrow_list_icon.png"
                alt=""
                className="arrow"
              />
              Improve Your problem solving.
            </li>
            <li>
              <img
                src="./images/arrow_list_icon.png"
                alt=""
                className="arrow"
              />
              Don't let yourself get bored.
            </li>
          </ul>
          <button onClick={navigatePlay} >PLAY</button>
        </div>
        <div className="landing--box--part p2">
          <img src="./images/wordleImg.jpg" alt="" className="landing--img" />
        </div>
      </div>
      <div className="landing--text">
        <h1>What seperates us ?</h1>
        <div className="landing--text-para">
          <p>
           Our community does not deals in advertisement rather seamless entertainment without any unnecessary traffic. Providing you the best of the best...
          </p>
        </div>
        <button >Read More</button>
      </div>
    </div>
  );
}
