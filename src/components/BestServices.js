import React from 'react';
import { Link } from 'gatsby';

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
              <Link to="/IncomeTax" className="btn_2">
                Load More
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part">
              <span className="single_service_icon">
                <i className="flaticon-growth" />
              </span>
              <h4>Income Tax</h4>
              <p>
                An annual government form is where citizens proclaim that their
                assessable salary, reasonings, and duty installments. This
                method of recording annual assessment forms is alluded to as
                salary assessment recording.
              </p>
              <Link to="/IncomeTax" className="btn_3">
                Learn More <i className="ti-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>GST</h4>
              <p>
                the GST installment procedure and GST installment timetable are
                of key significance to any business so as to remain
                compliant.make GST installment online in time,proceed with their
                business in a problem free way.
              </p>
              <Link to="/gst" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </Link>
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
                To make computerized mark and email program makes a single
                direction - hash of the electronic information to be agreed
                upon.
              </p>
              <Link to="/DigitalSignature" className="btn_3">
                Learn More <i className="ti-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>Health Insurance</h4>
              <p>
                Purchase medical coverage approach for yourself and your family
                on the grounds that restorative consideration is costly.
              </p>
              <Link to="/HealthInsurance" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single_service_part single_service_part_2">
              <span className="single_service_icon style_icon">
                <i className="flaticon-wallet" />
              </span>
              <h4>PAN Card</h4>
              <p>
                PAN is required for monetary exchanges, for example, accepting
                assessable pay or expert charges.
              </p>
              <Link to="PanCard" className="btn_3 service_btn">
                Learn More <i className="ti-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default BestServices;
