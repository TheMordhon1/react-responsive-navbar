import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo">
          <h1 className="text-2xl">
            React <i className="fab fa-react"></i>
          </h1>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="./signup">
          <Button>Sign up</Button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
