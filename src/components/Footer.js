/* eslint-disable prettier/prettier */
import React from 'react';

const Footer = () => (
  <footer className="copyright_part">
    <div className="container">
      <div className="row align-items-center">
        <p className="footer-text m-0 col-lg-8 col-md-12">
          Copyright ©2019 All rights reserved | This template is made with
          <i className="ti-heart" aria-hidden="true" /> by
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </p>
        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
          <a href="#">
            <i className="ti-facebook" />
          </a>
          <a href="#">
            {' '}
            <i className="ti-twitter" />{' '}
          </a>
          <a href="#">
            <i className="ti-instagram" />
          </a>
          <a href="#">
            <i className="ti-skype" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
