import React from 'react';

const BlogPart = () => (
  <section className="blog_part section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section_tittle text-center">
            <h2>Update From Blog</h2>
            <p>
              Services provide Income Tax Return, GST ,Finance,Helth
              Insurance,PAN Card.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4 d-none d-sm-block d-lg-none">
          <div className="single-home-blog">
            <div className="card">
              <img
                src="img/blog/blog_3.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body">
                <a href="blog.html">Income Tax</a> |{' '}
                <span> March 30, 2019</span>
                <a href="blog.html">
                  <h5 className="card-title">
                    Online filing of returns within two days.
                  </h5>
                </a>
                <ul>
                  <li>
                    <span className="ti-comments" />2 Comments
                  </li>
                  <li>
                    <span className="ti-heart" />
                    10 Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="single-home-blog">
            <div className="card">
              <img
                src="img/blog/blog_1.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body">
                <a href="blog.html">Income Tax</a> |{' '}
                <span> March 30, 2019</span>
                <a href="blog.html">
                  <h5 className="card-title">
                    Online filing of returns within two days.
                  </h5>
                </a>
                <ul>
                  <li>
                    <span className="ti-comments" />2 Comments
                  </li>
                  <li>
                    <span className="ti-heart" />0 Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="single-home-blog">
            <div className="card">
              <img
                src="img/blog/blog_2.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body">
                <a href="blog.html">GST</a> | <span> March 30, 2019</span>
                <a href="blog.html">
                  <h5 className="card-title">
                    Click This Blog and get information.
                  </h5>
                </a>
                <ul>
                  <li>
                    <span className="ti-comments" />2 Comments
                  </li>
                  <li>
                    <span className="ti-heart" />0 Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="single-home-blog">
            <div className="card">
              <img
                src="img/blog/blog_3.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body">
                <a href="blog.html">Insurance</a> |<span> March 30, 2019</span>
                <a href="blog.html">
                  <h5 className="card-title">
                    Get full information of Insurance
                  </h5>
                </a>
                <ul>
                  <li>
                    <span className="ti-comments" />2 Comments
                  </li>
                  <li>
                    <span className="ti-heart" />7 Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogPart;
