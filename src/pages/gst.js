/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Category from '../components/Category';

export default class GSTPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="GST Services"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />

        <BreadCrumb title="GST" subtitle="Service " />
        <section className="blog_area single-post-area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/single_blog_1.png"
                      alt=""
                    />
                  </div>
                  <div className="blog_details">
                    <h2>
                      Make GST portion online in time, and continue with their
                      business in an issue free manner.
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
                      GST will coordinate most expenses into a solitary one,
                      that will be connected to the deal and buy of merchandise
                      and ventures, with findings for charges paid at past store
                      network stages.
                    </p>
                    <p>
                      GST targets wiping out the difficulties of expense
                      organization and consistence. GST targets guaranteeing a
                      bound together charge for the whole country. GST targets
                      disposing of the unfortunate challenge among the states
                      due to expenses and incomes.
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        GST plans to supplant all aberrant collected on products
                        and ventures by the Indian Central and State
                        governments.
                      </div>
                    </div>
                    <p>
                      GST installment timetable are of key significance to any
                      business so as to remain compliant.make GST installment
                      online in time, and proceed with their business in a
                      problem free way.
                    </p>
                    <p>Visit the our website and choose the option.</p>
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
