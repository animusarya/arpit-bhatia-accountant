import React from 'react';
import styled from 'styled-components';

const Input = styled.form`
  padding: 4rem;
  padding-top: 8rem;
`;

const Form = () => (
  <Input className="col-lg-4 form">
    <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-home" />
      </span>
      <div className="media-body">
        <h3>Buttonwood, Jalandhar.</h3>
        <p>Rosemead, CA 91770</p>
      </div>
    </div>
    <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-tablet" />
      </span>
      <div className="media-body">
        <h3>Mobile No. : 1231212</h3>
        <p>Mon to Fri 9am to 6pm</p>
      </div>
    </div>
    <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-email" />
      </span>
      <div className="media-body">
        <h3>Email : @gmail.com</h3>
        <p>Send us your query anytime!</p>
      </div>
    </div>
  </Input>
);
export default Form;
