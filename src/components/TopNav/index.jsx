import React, {Component} from "react";

class TopNav extends Component {
    render() {
        return (
          <nav className="topbar topbar-sticky topbar-expand-md">
            <div className="container">
              <div className="topbar-left">
                <button className="topbar-toggler">&#9776;</button>
                <a className="topbar-brand" href="index.html">
                  <img className="logo-default" src="https://fscg.io/img/logo-light.png" alt="logo" />
                </a>
              </div>
              <div className="topbar-right">
                <ul className="topbar-nav nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="home">Home</a></li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="section-features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="section-pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="section-faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default TopNav;