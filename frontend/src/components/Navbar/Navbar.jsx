import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
const Navbar = () => {
  const token = localStorage.token
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {!token &&
              <li className="nav-item">
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
              </li>
            }
            {!token &&
              <li className="nav-item">
                <NavLink className="nav-link" to="sign-up">
                  Sign up
                </NavLink>
              </li>
            }
            {token &&
              <li className="nav-item">
                <NavLink className="nav-link" to="account">
                  Account
                </NavLink>
              </li>}
            {token &&
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">
                  Cart
                </NavLink>
              </li>}
            {token &&
              <li className="nav-item">
                <NavLink className="nav-link" to="order">
                  Order
                </NavLink>
              </li>}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
