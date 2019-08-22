import React from 'react';

const Category = () => (
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
              <p>Income Tax</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Health Insurance</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Pan Card</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Digital Signature</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Health Care</p>
            </a>
          </li>
        </ul>
      </aside>

      <aside className="single_sidebar_widget instagram_feeds">
        <h4 className="widget_title">Instagram Feeds</h4>
        <ul className="instagram_row flex-wrap">
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_5.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_6.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_7.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_8.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_9.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src="img/post/post_10.png" alt="" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
);
export default Category;
