
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/landing.css"
import "./css/bulma.css"
import "jquery"
import "./js/landingHelper.js"
// import 'react-modal';
// import leadModal from "../modal.js"
// import { Modal, bool, afterOpenFn, requestCloseFn, n, customStyle } from "react-modal"

class Landing extends Component {
  render() {
    return (
      <div>
       <section className="hero is-primary is-large header-image">
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item" href="/..landing.html">
                  <img className="logo" src="./images/solarize-icon-white.png" alt="Logo"></img>
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-active">Home</a>
                <a className="nav-item is-active">Stuff</a>
                <a className="nav-item is-active">Other Stuff</a>
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-info is-outlined is-inverted">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>User Login</span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2" id="main-title">Solarize</h1>
            <h2 className="subtitle is-5" id="sub-title">A solar lead management system</h2>
            <br></br>
            <br></br>
            <div>
              <div id="modal">
                include leadModal here
                <a className="button is-outlined" id="showModal">
                  <span className="icon">
                    <i className="fa fa-download"></i> 
                  </span>
                  <span>Request Info</span>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </section>
        <div className="hero-cta">
          <nav className="level">
            <div className="level-item has-text-centered">
              <p className="title">Click to get Started <a className="button is-primary"><span className="icon"><i className="fa fa-download"></i></span><span>Intent</span></a></p>
            </div>
          </nav>
        </div>
        <div className="section main">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-camera-retro icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-bar-chart icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-cloud icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p><strong>Solarize &copy 2017</strong></p>
              <p><a className="icon" href=""><i className="fa fa-github"></i></a></p>
            </div>
          </div>
        </footer>
      </div>      
      )
    }
  }
export default Landing;