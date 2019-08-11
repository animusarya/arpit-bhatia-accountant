import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';
import ListFooterArea from './ListFooterArea';
import Footer from './Footer';
import SecondHeader from './SecondHeader';

const Container = styled.div``;

const IndexLayout = ({ children, isHeader }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    {isHeader ? <Header /> : <SecondHeader />}
    <Container>{children}</Container>
    <ListFooterArea />
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
