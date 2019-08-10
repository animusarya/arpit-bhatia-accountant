import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Add custom css or scripts here */}
          <link rel="icon" href="img/favicon.png" />

          <link rel="stylesheet" href="css/bootstrap.min.css" />

          <link rel="stylesheet" href="css/animate.css" />

          <link rel="stylesheet" href="css/owl.carousel.min.css" />

          <link rel="stylesheet" href="css/themify-icons.css" />

          <link rel="stylesheet" href="css/flaticon.css" />

          <link rel="stylesheet" href="css/magnific-popup.css" />

          <link rel="stylesheet" href="css/slick.css" />

          <link rel="stylesheet" href="css/style.css" />

          {/* Add custom css or scripts here */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script src="js/jquery-1.12.1.min.js" />

        <script src="js/popper.min.js" />

        <script src="js/bootstrap.min.js" />

        <script src="js/jquery.magnific-popup.js" />

        <script src="js/swiper.min.js" />

        <script src="js/masonry.pkgd.js" />

        <script src="js/owl.carousel.min.js" />

        <script src="js/slick.min.js" />

        <script src="js/custom.js" />
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
