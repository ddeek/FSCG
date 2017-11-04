import React, {Component} from "react";

class HomeHeader extends Component {
    render() {
        return (
          <header className="header pb-0 h-fullscreen bg-grey bb-1">
            <div className="container">
              <div className="row h-full">
                <div className="col-12 text-center align-self-center">
                  <h1 className="fs-50 fw-200 lh-15 hidden-xs-down">Built for Authors,<br />Developed by an Author</h1>
                  <h1 className="fs-30 fw-200 lh-15 hidden-sm-up">Built for Authors</h1>
                  <br />
                  <p className="fs-20">Helpato is an <span className="fw-400">item support system</span> for Themeforest authors<span className="hidden-xs-down"><br />included ticketing system, forums, articles, and FAQs</span>.</p>
                  <br /><br />
                  <a className="btn btn-xl btn-round btn-primary fs-18 fw-500 w-350 shadow-3 hidden-xs-down" href="#">Login using Envato</a>
                  <a className="btn btn-lg btn-round btn-primary fw-500 w-250 shadow-3 hidden-sm-up" href="#">Login using Envato</a>
                  <br />
                  <p className="mt-4"><small>Login and Try it for FREE</small></p>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default HomeHeader;
