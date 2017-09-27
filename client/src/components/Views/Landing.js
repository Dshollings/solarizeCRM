
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/landing.css"
import "./css/bulma.css"
import "jquery"
import helpers from "./js/helper.js"

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
                 <img src="/favicon.png" alt="Solarize logo"/>
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-info is-outlined is-inverted" href="/signup">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Become an Affiliate</span>
                    </a>
                  </div>
                </span>
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-info is-outlined is-inverted" href="/login">
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
              <div className="modal">
                <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">Request Free Quote</p>
                      <button className="delete" aria-label="close" onClick={helpers.closeModal}></button>
                    </header>
                      <section className="modal-card-body">
                        <fieldset>
                          <p>FIND OUT HOW MUCH YOU CAN SAVE</p>
                          <input type="hidden" name="oid" value="00D80000000dNiA"></input>
                          <input type="hidden" name="retURL" value="#"></input>
                          <div>
                            <input id="first_name" maxLength="40" name="first_name" size="20" type="text" placeholder="First Name" required=""></input>
                          </div>
                          <div>
                            <input id="last_name" maxLength="80" name="last_name" size="20" type="text" placeholder="Last Name" required=""></input>
                          </div>
                          <div>
                            <input id="email" maxLength="80" name="email" size="20" type="email" placeholder="Email Address" required=""></input>
                          </div>
                          <div>
                            <input id="phone" maxLength="15" name="phone" size="20" type="tel" placeholder="Phone" required=""></input>
                          </div>
                          <div>
                            <input id = "streetAddress" name="street" size="20" placeholder="Street Address"></input>
                          </div>
                          <div>
                            <div className="tier">
                              <input id="city" maxLength="40" name="city" size="20" type="text" placeholder="City"></input>
                            </div>
                            <div>
                              <div className="tier">
                                <input id="state" maxLength="2" name="city" size="20" type="text" placeholder="State"></input>
                              </div>
                            </div>
                            <div className="tier">
                              <input id="zip" maxLength="5" name="zip" size="20" type="text" placeholder="Zip"></input>
                            </div>
                          </div>
                        </fieldset>
                      </section>
                    <footer className="modal-card-foot">
                      <button className="button is-success" id="butSubmit" onClick={helpers.submitLeadForm}>Save changes</button>
                      <button className="button is-danger" id="cancel" onClick={helpers.closeModal}>Cancel</button>
                    </footer>
                  </div>
                </div>
                <a className="button is-outlined" id="showModal" onClick={helpers.openModal}>
                  <span className="icon">
                    <i className="fa fa-download"></i> 
                  </span>
                  <span>Request Info</span>
                </a>
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