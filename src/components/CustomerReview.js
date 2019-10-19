import React from 'react';
import CustomerSlider from './CustomerSlider';

const CustomerReview = () => (
  <section className="review_part padding_top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section_tittle text-center">
            <h2>Customer Are Saying</h2>
            <p>customers are fully satisfy our company. </p>
          </div>
        </div>
      </div>
      <CustomerSlider />
      <div className="hero-app-7 custom-animation4">
        <img src="img/animate_icon/icon_4.png" alt="" />
      </div>
      <div className="hero-app-3 custom-animation2">
        <img src="img/animate_icon/icon_8.png" alt="" />
      </div>
      <div className="hero-app-8 custom-animation">
        <img src="img/animate_icon/icon_3.png" alt="" />
      </div>
    </div>
  </section>
);

export default CustomerReview;
