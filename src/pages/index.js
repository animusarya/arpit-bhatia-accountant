/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BannerPart from '../components/BannerPart';
import AboutPart from '../components/AboutPart';
import ServicesPart from '../components/ServicePart';
import ReviewPart from '../components/ReviewPart';
import PortfolioPart from '../components/PortfolioPart';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BannerPart />
        <AboutPart />
        <ServicesPart />
        <ReviewPart />
        <PortfolioPart />
      </Layout>
    );
  }
}
