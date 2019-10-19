import React from 'react';
import image1 from '../images/account.jpg';
import image2 from '../images/GST.jpg';
import image3 from '../images/accountant3.jpg';
import image4 from '../images/accountant.jpg';
import image5 from '../images/sign.jpg';
import image6 from '../images/insurrance.jpg';

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
              <img className="img-fluid" src={image1} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src={image2} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src={image3} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src={image4} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src={image5} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-fluid" src={image6} alt="" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
);
export default Category;
