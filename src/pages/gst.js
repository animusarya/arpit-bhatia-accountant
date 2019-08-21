/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import GstBlog from '../components/GstBlog';

export default class GSTPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="GST Services"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />

        <BreadCrumb title="GST" subtitle="Service " />
        <GstBlog />
      </Layout>
    );
  }
}
