/* eslint-disable prettier/prettier */
import React from 'react';

const BreadCrumb = ({ title, subtitle }) => (
  <section className="breadcrumb breadcrumb_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner">
            <div className="breadcrumb_iner_item">
              <h2>{title}</h2>
              <p>
                Home<span>-</span>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BreadCrumb;
