import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import image from '../images/insurrance.jpg';
import Form from '../components/Form';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="contact"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}/contact`}
        />

        <BreadCrumb title="Contact Us" subtitle="Contact" />
        <section className="blog_area single-post-area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img className="img-fluid" src={image} alt="" />
                  </div>
                </div>
              </div>
              <Form />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
