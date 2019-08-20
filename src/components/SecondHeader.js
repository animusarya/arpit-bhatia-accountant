import React from 'react';
import { Link } from 'gatsby';

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
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    Blog
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/services"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/IncomeTax">
                      Income Tax
                    </Link>
                    <Link className="dropdown-item" to="/gst">
                      GST
                    </Link>
                    <Link className="dropdown-item" to="/DigitalSignature">
                      Digital Signature
                    </Link>
                    <Link className="dropdown-item" to="project_details.html">
                      Pan Card
                    </Link>
                    <Link className="dropdown-item" to="/HealthInsurance">
                      Health Insurance
                    </Link>
                  </div>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
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
