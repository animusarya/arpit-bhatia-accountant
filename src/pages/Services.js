/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumbServices from '../components/BreadCrumbServices';
import BestServices from '../components/BestServices';
import ReviewPart from '../components/ReviewPart';

export default class ServicesPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />

        <BreadCrumbServices />
        <BestServices />
        <ReviewPart />
      </Layout>
    );
  }
}
