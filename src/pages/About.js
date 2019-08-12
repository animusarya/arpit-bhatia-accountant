/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AboutUs from '../components/AboutUs';
import AboutPart from '../components/AboutPart';
import ReviewPart from '../components/ReviewPart';
import HighQuality from '../components/HighQuality';


export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="About"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <AboutUs />
        <AboutPart />
        <ReviewPart />
        <HighQuality />
      </Layout>

    );
  }
}
