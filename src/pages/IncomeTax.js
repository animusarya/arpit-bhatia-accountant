import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Category from '../components/Category';
import image from '../images/accountant.jpg';

export default class IncomeTax extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="income-tax"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />

        <BreadCrumb title="Income Tax" subtitle="Tax" />
        <section className="blog_area single-post-area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="blog_details">
                    <h2>
                      Filing your tax can be beneficial even you fall into the
                      non-assessable level of pay.
                    </h2>
                    <ul className="blog-info-link mt-3 mb-4">
                      <li>
                        <a href="#">
                          <i className="far fa-user" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                        </a>
                      </li>
                    </ul>
                    <p className="excert">
                      Annual Tax Return is a proof that you have covered pay
                      regulatory expense. It contains insights concerning your
                      yearly pay and charge you have paid. Consistently, any
                      individual who win assessable pay need to document Income
                      Tax Return (ITR).
                    </p>
                    <p>
                      Online filing of returns within due date as applicable
                      time to time or every financial year, and being a month or
                      two in advance from due date in filing the income tax
                      returns actually ensures one encounters lesser traffic and
                      the entire process goes much smoother.
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        According ITR will help you in getting a discount on the
                        off chance that you cover more regulatory obligation
                        than what you are required to pay. In the event that you
                        neglect to document your ITR, you may need to pay
                        punishment or face lawful results.
                      </div>
                    </div>
                    <p>
                      According ITR will help you in getting a discount on the
                      off chance that you cover more regulatory obligation than
                      what you are required to pay. In the event that you
                      neglect to document your ITR, you may need to pay
                      punishment or face lawful results.
                    </p>
                    <p>
                      Visit the website of the Income Tax Department of India
                      and choose the option.
                    </p>
                  </div>
                </div>
              </div>
              <Category />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
