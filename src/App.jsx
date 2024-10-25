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
          Personal Portfolio / OLI ♡ྀི ₊
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
          <h2 className="tm-home-subtitle">Aspiring Web Designer</h2>
          <p className="forCaviar">
            I am an aspiring <strong> UI/UX Designer</strong> and{" "}
            <strong>Front-End Developer</strong> creating modern and responsive
            designs for <strong>Web</strong> and <strong>Mobile</strong>. Let us
            work together.  
          </p>
          <a href="#work"
            className="btn btn-default smoothScroll tm-view-more-btn">
            See More
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
            <h3 className="text-uppercase tm-work-h3">Mobile UX Mock-up Design</h3>
            <hr />
            <p className="examp">
             Creating visually appealing and user-friendly mobile app interfaces. </p>

            <a href = "https://www.figma.com/proto/qZ6CFMQ2lZoXBOj64McvZJ/iVote%3A-A-Prototype?node-id=195-610&node-type=canvas&t=ShViWCuT69hwA538-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target = "_blank" className ="example">See Example</a>
         
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="work-wrapper">
            <i className="fa fa-flash" />
            <h3 className="text-uppercase tm-work-h3">Web Design x Infographics</h3>
            <hr />
            <p className="examp">
            Leverage the power of infographics to create informative websites. </p>

            <a href = "https://512f111d-89e8-4cad-bf34-726faa3b44dd-00-27bycmpgmtl7g.picard.replit.dev/" target="_blank" className ="example">See Example</a>
            
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="work-wrapper">
            <i className="fa fa-dashboard" />
            <h3 className="text-uppercase tm-work-h3">HTML Templates and Other Portfolio</h3>
            <hr />
            <p className="examp">
            Customizable templates that serve as the foundation for various projects.</p>

            <a href = " https://ba80bb86-b3b1-45b1-affc-d0d1dc044a47-00-fgfy8i33myzr.kirk.replit.dev/" target = "_blank" className ="example">See Example</a>
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
          {/* START ISO SECTION
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
            </ul> */}
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
                      <h3 className="portfolio-item-title">Web Design</h3>
                      <p>
                        Web Design Example Website
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
                      <h3 className="portfolio-item-title">Web Design</h3>
                      <p>
                      Web Design Example Website
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
                      <h3 className="portfolio-item-title">Web Design</h3>
                      <p>
                      Web Design Example Website
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
                      <h3 className="portfolio-item-title">Web Design</h3>
                      <p>
                        Web Design Example Website
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
                      <h3 className="portfolio-item-title">Mobile Mock-up Design</h3>
                      <p>
                        Mobile Mock-up Design using Figma
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
                      <h3 className="portfolio-item-title">Mobile Application Interface Design </h3>
                      <p>
                        I aspire to be able to create an interface design for Mobile Application
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
                      <h3 className="portfolio-item-title">Mobile Mock-up Design</h3>
                      <p>
                      Mobile Mock-up Design using Figma
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
                      <h3 className="portfolio-item-title">Infographics Design</h3>
                      <p>
                        Designing an Infographics 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
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
            <span className="tm-info-label">Name:</span> Princess Olingay
          </p>
          <p>
            <span className="tm-info-label">Birthday:</span> August XD, 20XP
          </p>
          <p>
            <span className="tm-info-label">Address:</span> Angeles City
          </p>
          <p>
            <span className="tm-info-label">Phone:</span> +639 6710 96215
          </p>
          <p>
            <span className="tm-info-label">Email:</span> princessolingay@gmail.com
          </p>
          <p>
            <span className="tm-info-label">Website:</span>{" "}
            <a href="https://cute-brigadeiros-c44d15.netlify.app/" target="_blank" className="tm-red-text">
              antecedence.port
            </a>
          </p>
        </div>
        {/*https://512f111d-89e8-4cad-bf34-726faa3b44dd-00-27bycmpgmtl7g.picard.replit.dev/ */}
        {/* https://ba80bb86-b3b1-45b1-affc-d0d1dc044a47-00-fgfy8i33myzr.kirk.replit.dev/ */}
        {/* https://www.figma.com/proto/qZ6CFMQ2lZoXBOj64McvZJ/iVote%3A-A-Prototype?node-id=195-610&node-type=canvas&t=ShViWCuT69hwA538-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1
         */}
        <div className="col-md-6 col-sm-6">
          <h2 className="title">
            <strong>Some</strong> Skills
          </h2>
          <p>
          As a versatile web developer, I am proficient in HTML5, CSS3, SEO, JavaScript, 
          responsive design, version control, problem-solving, and continuous learning. EME
          </p>
          <h4 className="tm-progress-label">
            HTML5 <small className="progress-percent-small">100%</small>
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
            CSS3 <small className="progress-percent-small">90%</small>
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
          <p className = "resumep">
          Building robust and responsive web layouts.
          Optimizing websites for search engines to drive organic traffic.
          Creating interactive and dynamic web experiences.
          Ensuring websites are accessible and usable across devices.
          Using Git for efficient collaboration and project management.
          Identifying and resolving technical challenges effectively.
          Staying up-to-date with the latest web development trends and technologies.
          </p>
          <a href = "https://drive.google.com/file/d/1Va5rNh4xwc_LGIzlFBgwODMpPCirkiLA/view?usp=drive_link" target = "_blank" className = "resume example">
            See Resume
          </a>
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
            Copyright © 2018 Ultra Profile | Princess Olingay ఌ︎
            
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
