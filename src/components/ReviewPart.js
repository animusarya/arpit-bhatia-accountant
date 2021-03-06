import React from 'react';

const ReviewPart = () => (
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
      <div className="row justify-content-center">
        <div className="col-lg-6 col-xl-5">
          <div className="slider-nav-thumbnails">
            <div className="slider-thumbnails">
              <div className="slider">
                <div data-index="">
                  <div className="client_review_text text-center">
                    <img
                      src="img/client/client_1.png"
                      alt="slideimg"
                      className="image"
                    />
                    <p>
                      This Company Staff has the deep knowledge of Indian
                      taxation system,GST. His advice has helped us plan the
                      future.
                    </p>
                    <h3>Customer Name</h3>
                    <h5>Jalandhar, Punjab </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default ReviewPart;
