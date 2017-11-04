import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="site-footer py-90">
        <div className="container">
          <div className="row gap-y">
            <div className="col-12 col-md-5">
              <h6 className="heading-alt text-uppercase fs-14 mb-3">TheSaaS</h6>
              <p className="fs-13">TheSaaS is a responsive, professional, and multipurpose SaaS, Software, Startup and WebApp landing template; backed for entrepreneurs and powered by Bootstrap 4.</p>
              <br />
              <p className="text-light">{copyright}</p>
            </div>
            <div className="col-12 col-md-2">
              <h6 className="heading-alt text-uppercase fs-14 mb-3">Company</h6>
              <div className="nav flex-column">
                <a className="nav-link" href="page-how-it-works.html">How It Works</a>
                <a className="nav-link" href="page-pricing.html">Pricing</a>
                <a className="nav-link" href="blog-grid.html">Blog</a>
                <a className="nav-link" href="page-about.html">About</a>
                <a className="nav-link" href="page-privacy.html">Privacy Policy</a>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <h6 className="heading-alt text-uppercase fs-14 mb-3">Get Started</h6>
              <p className="fs-13">TheSaaS design is harmonious, clean and user friendly. Even though the template has a lot of content, it doesn’t looks messy and all files and code are well structured, commented and divided.</p>
              <br />
              <p>
                <a className="btn btn-sm btn-primary mr-10" href="page-demo.html">Take a test drive</a>
                <a className="btn btn-sm btn-secondary hidden-md-down" href="page-contact.html">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
