function App() {
  return (
    <>
     {/* START NAVIGATION */}
  <div
    className="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation"
    role="navigation"
  >
    <div className="container">
      <div className="navbar-header">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#rock-navigation"
        >
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
        <a href="#" className="navbar-brand">
          Ultra Profile
        </a>
      </div>
      <nav className="collapse navbar-collapse" id="rock-navigation">
        <ul className="nav navbar-nav navbar-right main-navigation text-uppercase">
          <li>
            <a href="#home" className="smoothScroll">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="smoothScroll">
              My Work
            </a>
          </li>
          <li>
            <a href="#portfolio" className="smoothScroll">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" className="smoothScroll">
              Resume
            </a>
          </li>
          <li>
            <a href="#about" className="smoothScroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="smoothScroll">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* END NAVIGATION */}
  {/* START HOME */}
  <section id="home" className="templatemo-home">
    <div className="containlink">
      <div className="row">
        <div className="col-md-2 col-sm-1" />
        <div className="col-md-8 col-sm-10">
          <h1 className="tm-home-title">
            <strong>Princess Olingay</strong>
          </h1>
          <h2 className="tm-home-subtitle">Web Designer</h2>
          <p>
            I am a professional <strong>UX Designer</strong> and{" "}
            <strong>Front-End Developer</strong> creating modern and responsive
            designs for <strong>Web</strong> and <strong>Mobile</strong>. Let us
            work together. Thank you.
          </p>
          <a
            href="#work"
            className="btn btn-default smoothScroll tm-view-more-btn"
          >
            Let's Begin
          </a>
        </div>
        <div className="col-md-2 col-sm-1" />
      </div>
    </div>
  </section>
  {/* END HOME */}
  {/* START work */}
  <section id="work" className="tm-padding-top-bottom-100">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-11">
          <h2 className="title">
            My <strong>Work</strong>
          </h2>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="work-wrapper">
            <i className="fa fa-link" />
            <h3 className="text-uppercase tm-work-h3">Mobile UX</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="work-wrapper">
            <i className="fa fa-flash" />
            <h3 className="text-uppercase tm-work-h3">Web Design</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="work-wrapper">
            <i className="fa fa-dashboard" />
            <h3 className="text-uppercase tm-work-h3">HTML Templates</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END work */}
  {/* START PORTFOLIO */}
  <section id="portfolio" className="tm-portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12 wow bounce">
          <div className="title">
            <h2 className="tm-portfolio-title">
              My <strong>Portfolio</strong>
            </h2>
          </div>
          {/* START ISO SECTION */}
          <div className="iso-section">
            <ul className="filter-wrapper clearfix">
              <li>
                <a href="#" className="opc-main-bg selected" data-filter="*">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="opc-main-bg" data-filter=".html">
                  HTML
                </a>
              </li>
              <li>
                <a href="#" className="opc-main-bg" data-filter=".photoshop">
                  Photoshop
                </a>
              </li>
              <li>
                <a href="#" className="opc-main-bg" data-filter=".wordpress">
                  Wordpress
                </a>
              </li>
              <li>
                <a href="#" className="opc-main-bg" data-filter=".mobile">
                  Mobile
                </a>
              </li>
            </ul>
            <div className="iso-box-section">
              <div className="iso-box-wrapper col4-iso-box">
                <div className="iso-box html photoshop wordpress mobile col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img1.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box html wordpress mobile col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img2.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img3.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box html mobile col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img4.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img5.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box html photoshop col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img6.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box photoshop col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img7.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                  <div className="portfolio-thumb">
                    <img
                      src="images/portfolio-img8.jpg"
                      className="fluid-img"
                      alt="portfolio img"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="portfolio-item-title">UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonumm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END PORTFOLIO */}
  {/* START RESUME */}
  <section id="resume" className="tm-padding-top-bottom-100">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h2 className="title">
            My <strong>Profile</strong>
          </h2>
          <p>
            <span className="tm-info-label">Name</span> John White
          </p>
          <p>
            <span className="tm-info-label">Birthday</span> December 24, 1996
          </p>
          <p>
            <span className="tm-info-label">Address</span> Melbourne Victoria
            3000 Australia
          </p>
          <p>
            <span className="tm-info-label">Phone</span> +001 020 0340 | 009 080
            0760
          </p>
          <p>
            <span className="tm-info-label">Email</span> hello@company.com
          </p>
          <p>
            <span className="tm-info-label">Website</span>{" "}
            <a href="#" className="tm-red-text">
              www.company.com
            </a>
          </p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h2 className="title">
            <strong>Some</strong> Skills
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat.
          </p>
          <h4 className="tm-progress-label">
            Bootstrap <small className="progress-percent-small">100%</small>
          </h4>
          <div className="progress tm-progress">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "100%" }}
            />
          </div>
          <h4 className="tm-progress-label">
            HTML5 <small className="progress-percent-small">90%</small>
          </h4>
          <div className="progress tm-progress">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "90%" }}
            />
          </div>
          <h4 className="tm-progress-label">
            SEO <small className="progress-percent-small">80%</small>
          </h4>
          <div className="progress tm-progress">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END RESUME */}
  {/* START ABOUT */}
  <section id="about" className="tm-about">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-6 col-md-6 col-sm-offset-6 col-sm-7">
          <div className="title">
            <h2>
              This is <strong>me</strong>
            </h2>
            <h1 className="tm-red-text">
              Creative <strong>Director</strong>
            </h1>
          </div>
          <p>
            This is free Bootstrap v3.3.4 mobile friendly layout from{" "}
            <a rel="nofollow" href="https://templatemo.com">
              templatemo
            </a>
            . Feel free to use it for your website. Credit goes to{" "}
            <a rel="nofollow" href="https://pixabay.com">
              Pixabay
            </a>{" "}
            for photos used in this template. Dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* END ABOUT */}
  {/* START SOCIAL */}
  <section id="social" className="tm-social">
    <div className="container">
      <div className="row">
        <div
          className="col-md-4 col-sm-4 wow rotateInUpLeft"
          data-wow-delay="0.3s"
        >
          <div className="media facebook">
            <a href="#">
              <div className="media-object pull-left">
                <i className="fa fa-facebook" />
              </div>
              <div className="media-body">
                <h4 className="media-heading tm-social-title">Follow me on</h4>
                <h3>Social Facebook</h3>
              </div>
            </a>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-4 wow rotateInUpLeft"
          data-wow-delay="0.6s"
        >
          <div className="media twitter">
            <a href="#">
              <div className="media-object pull-left">
                <i className="fa fa-twitter" />
              </div>
              <div className="media-body">
                <h4 className="media-heading tm-social-title">Tweet me on</h4>
                <h3>Social Twitter</h3>
              </div>
            </a>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-4 wow rotateInUpLeft"
          data-wow-delay="0.9s"
        >
          <div className="media pinterest">
            <a href="#">
              <div className="media-object pull-left">
                <i className="fa fa-pinterest" />
              </div>
              <div className="media-body">
                <h4 className="media-heading tm-social-title">Pin me on</h4>
                <h3>Social Pinterest</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SOCIAL */}
  {/* START CONTACT */}
  <section id="contact" className="tm-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="title">
            Drop <strong>me a line</strong>
          </h2>
          <hr />
        </div>
        <div className="col-md-1 col-sm-1" />
        <div className="col-md-10 col-sm-10">
          <form action="#" method="post">
            <div className="col-md-6 col-sm-6">
              <input
                className="form-control"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="col-md-12 col-sm-12">
              <input
                className="form-control"
                type="text"
                placeholder="Your Subject"
              />
              <textarea
                className="form-control"
                placeholder="Your Message"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
              <input
                className="form-control"
                type="submit"
                defaultValue="SHOOT MESSAGE"
              />
            </div>
          </form>
        </div>
        <div className="col-md-1 col-sm-1" />
        <div className="col-md-12 col-sm-12">
          <p>
            Copyright © 2018 Ultra Profile . design:{" "}
            <a rel="nofollow noopener" href="https://templatemo.com">
              template mo
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* END CONTACT */}
    </>
  )
}

export default App
