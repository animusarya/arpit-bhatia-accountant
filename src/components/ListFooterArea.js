/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const ListFooterArea = () => (
  <section className="footer-area section_padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
          <h4>Top Products</h4>
          <ul>
            <li>
              <a href="#">Managed Website</a>
            </li>
            <li>
              <a href="#">Manage Reputation</a>
            </li>
            <li>
              <a href="#">Power Tools</a>
            </li>
            <li>
              <a href="#">Marketing Service</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Experts</a>
            </li>
            <li>
              <a href="#">Agencies</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-4 col-sm-8 col-md-8 mb-4 mb-xl-0 single-footer-widget">
          <h4>Newsletter</h4>
          <p>You can trust us. we only send promo offers,</p>
          <div className="form-wrap" id="mc_embed_signup">
            <form
              // target="_blank"
              // action="/"
              // method="get"
              className="form-inline"
            >
              <input
                className="form-control"
                name="EMAIL"
                placeholder="Your Email Address"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Your Email Address '"
                required=""
                type="email"
              />
              <button className="click-btn btn btn-default text-uppercase btn_2">
                subscribe
              </button>
              <DivWrapper>
                <input
                  name="b_36c4fd991d266f23781ded980_aefe40901a"
                  tabIndex="-1"
                  //   value=""
                  type="text"
                />
              </DivWrapper>

              <div className="info" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListFooterArea;
