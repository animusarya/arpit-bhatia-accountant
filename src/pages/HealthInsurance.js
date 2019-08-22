import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Category from '../components/Category';

export default class HealthInsurance extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="HealthInsurance"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BreadCrumb title="Health Insurance" subtitle="Insurance" />
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
                      Purchase medical coverage approach for yourself and your
                      family on the grounds that restorative consideration is
                      costly.
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
                      health insurance is imperative to the general public since
                      individuals get sick, mishaps and crises do emerge and the
                      medical clinics are expected to analyze, treat and oversee
                      various sorts of illnesses and infections.
                    </p>
                    <p>
                      Health insurance is imperative to the general public since
                      individuals get sick, mishaps and crises do emerge
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        Purchasing a health insurance strategy for yourself and
                        your family is significant in light of the fact that
                        medical care is costly
                      </div>
                    </div>
                    <p>
                      All this can be avoided by just paying a small annual
                      premium which would lessen your stress in case of medical
                      emergencies.
                    </p>
                    <p>
                      Visit the our website and choose the Health Insurance
                      option.
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
