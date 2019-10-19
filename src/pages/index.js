/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BannerPart from '../components/BannerPart';
import Expereince from '../components/Expereince';
import BestServices from '../components/BestServices';
import CustomerReview from '../components/CustomerReview';
import PortfolioPart from '../components/PortfolioPart';
import HighQuality from '../components/HighQuality';
import BlogPart from '../components/BlogPart';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout isHeader>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BannerPart />
        <Expereince />
        <BestServices />
        <CustomerReview />
        <PortfolioPart />
        <HighQuality />
        <BlogPart />
      </Layout>
    );
  }
}
