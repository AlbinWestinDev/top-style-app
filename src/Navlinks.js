import React from "react";
import { Link } from "react-router-dom";
import "./Navlinks.css";

function Navlinks() {
  return (
    <div className="navlinks">
      <div className="navlinks__outer">
        <div className="navlinks__inner">
          <Link>New in</Link>
          <Link>Customer Service</Link>
          <Link>Other Services</Link>
        </div>
      </div>
    </div>
  );
}
export default Navlinks;
