import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BannerPart from '../components/BannerPart';
import AboutPart from '../components/AboutPart';

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
      </Layout>
    );
  }
}
