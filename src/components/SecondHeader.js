import React from 'react';
// import { Link } from 'gatsby';

const SecondHeader = () => (
  <header className="main_menu">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <img src="img/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse main-menu-item justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Blog
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default SecondHeader;
