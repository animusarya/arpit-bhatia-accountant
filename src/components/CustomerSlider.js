import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CustomerSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
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
                            1 This Company Staff has the deep knowledge of
                            Indian taxation system,GST. His advice has helped us
                            plan the future.
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
          </div>
          <div>
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
                            2This Company Staff has the deep knowledge of Indian
                            taxation system,GST. His advice has helped us plan
                            the future.
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
          </div>
          <div>
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
                            3 This Company Staff has the deep knowledge of
                            Indian taxation system,GST. His advice has helped us
                            plan the future.
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
          </div>
        </Slider>
      </div>
    );
  }
}
