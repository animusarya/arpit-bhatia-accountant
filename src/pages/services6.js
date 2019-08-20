import React from 'react';

import Seo from '../components/Seo';
import config from '../utils/config';
import BreadCrumb from '../components/BreadCrumb';
import OurBlog from '../components/OurBlog';
import Layout from '../components/Layout';

export default class Services extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="About"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <BreadCrumb title="Our Blog" subtitle="Our Blog" />
        <OurBlog />
      </Layout>
    );
  }
}
