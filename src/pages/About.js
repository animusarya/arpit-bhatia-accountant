/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import AboutPart from '../components/AboutPart';
import CustomerReview from '../components/CustomerReview';
import AdviserService from '../components/AdviserService';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="About"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BreadCrumb title="About Us" subtitle="About" />
        <AboutPart />
        <CustomerReview />
        <AdviserService />
      </Layout>
    );
  }
}
