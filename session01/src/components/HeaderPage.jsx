import React, { Component } from "react";

export default class HeaderPage extends Component {
  render() {
    return (
      <div>
        <div className='hero_area'>
          {/* header section strats */}
          <header className='header_section'>
            <div className='container-fluid'>
              <nav className='navbar navbar-expand-lg custom_nav-container'>
                <a
                  className='navbar-brand'
                  href='index.html'
                  style={{ paddingRight: 200 }}
                >
                  <span> Rikkei Store </span>
                </a>
                <div className='navbar-collapse' id=''>
                  <div className='container'>
                    <div className='mr-auto flex-column flex-lg-row align-items-center'>
                      <ul className='navbar-nav justify-content-between'>
                        <div className='d-none d-lg-flex'>
                          <li className='nav-item'>
                            <a className='nav-link' href='#'>
                              {" "}
                              HOMEPAGE
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a className='nav-link' href='#'>
                              {" "}
                              PRODUCT{" "}
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a className='nav-link' href='#'>
                              {" "}
                              ABOUT{" "}
                            </a>
                          </li>
                          <li className='nav-item'>
                            <a className='nav-link' href='#'>
                              {" "}
                              CONTACT
                            </a>
                          </li>
                        </div>
                        <div className='d-none d-lg-flex'>
                          <li className='nav-item'>
                            <a className='nav-link' href='contact.html'>
                              Login / Register
                            </a>
                          </li>
                          <form className='form-inline my-2 ml-5 mb-3 mb-lg-0'>
                            <button
                              className='btn my-2 my-sm-0 nav_search-btn'
                              type='submit'
                            />
                          </form>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
          {/* slider section */}
          <section className='slider_section position-relative'>
            <div
              id='carouselExampleControls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='slider_item-box'>
                    <div className='slider_item-container'>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='offset-md-2 col-md-4'>
                            <div className='slider_item-detail'>
                              <div>
                                <h2 className='slider_heading'>
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className='d-flex'>
                                  <a href='' className='slider_btn'>
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='hero_img-box'>
                              <img src='images/hero.png' alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='slider_item-box'>
                    <div className='slider_item-container'>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='offset-md-2 col-md-4'>
                            <div className='slider_item-detail'>
                              <div>
                                <h2 className='slider_heading'>
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className='d-flex'>
                                  <a href='' className='slider_btn'>
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='hero_img-box'>
                              <img src='images/hero.png' alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='slider_item-box'>
                    <div className='slider_item-container'>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='offset-md-2 col-md-4'>
                            <div className='slider_item-detail'>
                              <div>
                                <h2 className='slider_heading'>
                                  50% OFF <br />
                                  First order
                                </h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nis
                                </p>
                                <div className='d-flex'>
                                  <a href='' className='slider_btn'>
                                    {" "}
                                    Order Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='hero_img-box'>
                              <img src='images/hero.png' alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleControls'
                role='button'
                data-slide='prev'
              >
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleControls'
                role='button'
                data-slide='next'
              >
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </section>
          {/* end slider section */}
        </div>
      </div>
    );
  }
}
