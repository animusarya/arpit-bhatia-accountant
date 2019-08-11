/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <h1>i am about</h1>
      </Layout>
    );
  }
}