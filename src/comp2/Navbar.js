import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
function Navbar() {
  return (
    <div className="outer-nav">
      <div className="inner-text">
        <h1>React- A Tool for developers</h1>
      </div>
      <div className="navbar">
        <div className="logo">
          <i class="fa-brands fa-react fa-2x "></i>
        </div>
        <ul className="list-items-group">
          <li>
            <Link target="_blank" rel="noreferrer" to="/">
              Home
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reactjs.org/tutorial/tutorial.html"
            >
              Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org/community/support.html"
              target="_blank"
              rel="noreferrer"
            >
              Community
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
