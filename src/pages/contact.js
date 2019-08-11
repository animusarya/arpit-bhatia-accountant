/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Form from '../components/Form';


export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />

        <BreadCrumb title="Contact Us" subtitle="Contact" />
        <Form />
      </Layout>
    );
  }
}
