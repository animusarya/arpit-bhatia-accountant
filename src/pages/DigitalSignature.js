import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Category from '../components/Category';
import image from '../images/sign.jpg';

export default class DigitalSignature extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="About"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BreadCrumb title="Digital Signature" subtitle="Blog" />
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
                      To make computerized mark and email program makes a single
                      direction - hash of the electronic information to be
                      agreed upon.
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
                      Utilizing digital signatures over paper and ink signature
                      accompanies numerous focal points. Do not waste time
                      sending your contracts in the mail.
                    </p>
                    <p>
                      Sending records carefully is quicker and more
                      cost-effective.Never be without a significant archive
                      again.
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        digital signatures are particularly significant for
                        electronic business and are a key segment of most
                        validation plans.
                      </div>
                    </div>
                    <p>
                      digital signatures are particularly significant for
                      electronic business and are a key segment of most
                      validation plans.
                    </p>
                    <p>
                      Visit the our website and choose the Digital Signature
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
