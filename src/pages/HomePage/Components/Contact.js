import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import './css/contact.css'
export default function Contact() {
  return (
    <div className="about">
      <div className="about--box1">
        <h3>Get in touch</h3>
        <p className="about--box1--quote">
          Our sole aim is to challenge you through to the darkest corners of
          your cerebellum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, porro est
          deleniti rem sint consectetur sunt nemo ut voluptates, nulla minus non
          nihil rerum libero!
        </p>
        <div className="about--box1--socialMedia">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
        </div>
      </div>
      <div className="about--box2">
          <div className="about--box2--heading1">
                <h4>Call Us</h4>
                <p className="contact">1234567890</p>
                <p className="contact">0987654321</p>
          </div>
          <div className="about--box2--heading2">
                <h4>Location</h4>
                <p className="address">
                    Building 1, Block 2, ApartMent3, NYC
                </p>
          </div>
      </div>
      <div className="about--box3">
          <form action="">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter a Valid Email address" />
            <textarea name="" id="" cols="20" rows="5" />
            <input type="submit"  value="Submit"/ >
          </form>
      </div>
    </div>
  );
}
