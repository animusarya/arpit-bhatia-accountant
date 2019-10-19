import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Category from '../components/Category';
import image from '../images/PanCard.jpg';

export default class PanCard extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="pan-card"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BreadCrumb title="Pan Card" subtitle="Blog" />
        <section className="blog_area single-post-area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img className="img-fluid" src={image} alt="" />
                  </div>
                  <div className="blog_details">
                    <h2>
                      PAN is required for monetary exchanges, for example,
                      accepting assessable pay or expert charges.
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
                      PAN means Permanent Account Number.It is a ten-digit
                      alpha-numeric number issued by the income tax
                      department.The card is required for all individuals who
                      file tax returns
                    </p>
                    <p>
                      Permanent Account Number is provided by Income tax
                      department to every income tax payer.
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        The PAN Card can only be allotted once a person turns 18
                        years of age.
                      </div>
                    </div>
                    <p>
                      An individual can also use his PAN card as a proof of
                      identity and proof of age.
                    </p>
                    <p>Visit the our website and choose the Pan Card option.</p>
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
