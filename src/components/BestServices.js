/* eslint-disable prettier/prettier */
import React from 'react';

const BestServices = () => (
  <React.Fragment>
    <section className="service_part section_padding gray_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-8 col-xl-4">
            <div className="single_service_text">
              <h2>We Provide Best Services</h2>
              <p>
                Male bring land dominion over can not yielding. His order moveth
                under of dry brought him is. Multiply which firmament deep make.
                Male bring land. Dominion over can not yielding. His moveth
                under of dry brought him is. Multiply which firmament deep make.
              </p>
              <a href="#" className="btn_2">
                Load More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part">
              <span className="single_service_icon">
                <i className="flaticon-growth" />
              </span>
              <h4>Income Tax</h4>
              <p>
                An income tax return is a form where taxpayers declare that
                their taxable income, deductions, and tax payments. This
                procedure of filing income tax returns is referred to as income
                tax filing.
              </p>
              <a href="/income-tax" className="btn_3">
                Learn More <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>GST</h4>
              <p>
                the GST payment process and GST payment schedule are of key
                importance to any business in order to remain compliant.make GST
                payment online in time, and continue their business in a hassle
                free manner.
              </p>
              <a href="/gst" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="service_part section gray_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part">
              <span className="single_service_icon">
                <i className="flaticon-growth" />
              </span>
              <h4>Digital Sinature</h4>
              <p>
                To create digital signature and email program creates a one-way
                - hash of the electronic data to be signed.
              </p>
              <a href="/digital-signature" className="btn_3">
                Learn More <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>Health Insurance</h4>
              <p>
                Buy health insurance policy for yourself and your family because
                medical care is expensive.
              </p>
              <a href="/health-insurance" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>PAN Card</h4>
              <p>
                PAN is mandatory for financial transactions such as receiving
                taxable salary or professional fees.
              </p>
              <a href="/pan-card" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default BestServices;
