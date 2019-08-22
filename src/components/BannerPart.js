import React from 'react';

const BannerPart = () => (
  <section className="banner_part">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-xl-6">
          <div className="banner_text">
            <div className="banner_text_iner">
              <h1>
                Welcome to <br /> Your Company , <br /> Chandigarh
              </h1>
              <p>
                Our Comapany provides outstanding service to our clients.We
                offer a services for Income Tax Return, GST ,Finance,Helth
                Insurance,PAN Card.{' '}
              </p>
              <a href="#" className="btn_1">
                learn more
              </a>
              <a
                href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                className="popup-youtube video_popup"
              >
                <span>
                  <img src="img/icon/play.svg" alt="" />
                </span>{' '}
                Intro Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-app-1 custom-animation">
      <img src="img/animate_icon/icon_1.png" alt="" />
    </div>
    <div className="hero-app-2 custom-animation2">
      <img src="img/animate_icon/icon_2.png" alt="" />
    </div>
    <div className="hero-app-5 custom-animation4">
      <img src="img/animate_icon/icon_5.png" alt="" />
    </div>
    <div className="hero-app-7 custom-animation2">
      <img src="img/animate_icon/icon_7.png" alt="" />
    </div>
    <div className="hero-app-8 custom-animation">
      <img src="img/animate_icon/icon_8.png" alt="" />
    </div>
  </section>
);

export default BannerPart;
