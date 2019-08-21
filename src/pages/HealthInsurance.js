import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import InsuranceBlog from '../components/InsuranceBlog';

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
        <InsuranceBlog />
      </Layout>
    );
  }
}
