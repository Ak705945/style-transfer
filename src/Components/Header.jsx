import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <div className="head">
      {" "}
      <nav class="navbar navbar-expand-lg bg-lignt">
        <a class="navbar-brand" href="/">
          <h2>Image Style Transfer</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/">
                <Button name={"Home"} title="span" />
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/try-page">
                <Button name={"Try it now!"} title="span" />
              </Link>
            </li>
            <li class="nav-item active">
              <a href="#footer">
                <Button name={"Contact us"} title="span" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
