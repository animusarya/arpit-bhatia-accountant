import React from 'react';

const OurBlog = () => (
  <section className="blog_area single-post-area section_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 posts-list">
          <div className="single-post">
            <div className="feature-img">
              <img
                className="img-fluid"
                src="img/blog/single_blog_1.png"
                alt=""
              />
            </div>
            <div className="blog_details">
              <h2>
                Every business has to file various returns with appropriate
                government agencies. SPA are filing these returns.
              </h2>
              <ul className="blog-info-link mt-3 mb-4">
                <li>
                  <a href="#">
                    <i className="far fa-user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-comments" />
                  </a>
                </li>
              </ul>
              <p className="excert">
                Income Tax Return is a proof that you have paid income tax.
                It contains details about your annual income and
                tax you have paid. Every year, any person who earn taxable
                income have to file Income Tax Return (ITR). Filing ITR will
                help you in getting a refund in case you pay more tax than what
                you are required to pay. If you fail to file your ITR, you might
                have to pay penalty or face legal consequences.
              </p>
              <p>
                Online filing of returns within due date as applicable time to
                time or every financial year, and being a month or two in
                advance from due date in filing the income tax returns actually
                ensures one encounters lesser traffic and the entire process
                goes much smoother.
              </p>
              <div className="quote-wrapper">
                <div className="quotes">
                  Creating a favourable financial history – Online filing of the
                  income tax returns actually creates a history of your
                  financial records with the tax department in a much faster.
                   This history is favoured by a lot of
                  organisations, be it financial or otherwise, which you might
                  have a business relationship with in the future.
                </div>
              </div>
              <p>
                Tax is a central element to the revenue generation system of the
                Indian government. Among the multitude of taxes present in the
                system, income tax is the one that deals with the taxation of
                the earning of every individual, firm or organisation in a
                financial year. The earning or income could be in the form of
                regular wages, interest, dividends, capital gains or any other
                profits.
              </p>
              <p>
                Visit the website of the Income Tax Department of India and
                choose the option for e-filing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Category</h4>
              <ul className="list cat-list">
                <li>
                  <a href="#" className="d-flex">
                    <p>GST</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Travel news</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Inspiration</p>
                    <p>(21)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Health Care</p>
                    <p>(21)</p>
                  </a>
                </li>
              </ul>
            </aside>

            <aside className="single_sidebar_widget instagram_feeds">
              <h4 className="widget_title">Instagram Feeds</h4>
              <ul className="instagram_row flex-wrap">
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_5.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_6.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_7.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_8.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_9.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_10.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default OurBlog;
