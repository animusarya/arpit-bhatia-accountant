import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import OurBlog from '../components/OurBlog';

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
        <OurBlog />
      </Layout>
    );
  }
}
