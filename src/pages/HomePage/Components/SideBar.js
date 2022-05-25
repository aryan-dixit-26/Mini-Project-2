import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";

export default function SideBar() {
  return (
    <aside>
      <ul>
        <Link to="/" className="linki">
          <li>
            Home
          </li>
        </Link>

        <Link to="/about" className="linki">
          <li>
            About
          </li>
        </Link>

        <Link  to="/contact" className="linki">
          <li>
            Contact
          </li>
        </Link>

        <Link to="/memory" className="linki">
          <li>
            Games
          </li>
        </Link>

        <Link to="/login" className="linki">
          <li>
            Login
          </li>
        </Link>
      </ul>
    </aside>
  );
}
