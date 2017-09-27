
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/landing.css"
import "jquery"
import helpers from "./js/helper.js"

class Loginpage extends Component {
  render() {
    return (
      <div>
        <div className="login-wrapper columns">
          <div className="column is-8 is-hidden-mobile hero-banner">
            <section className="hero is-fullheight is-dark header-image">
              <div className="hero-body">
                <div className="container">
                  <div className="has-text-right">
                    <h1 className="title is-1" >Login</h1> <br />
                    <p className="title is-3">Secure User Account Login</p>
                  </div>
                </div>
              </div>
              <div className="hero-footer">
                <p className="has-text-centered">Solarize Lead Management System©</p>
              </div>
            </section>  
          </div>
          <div className="column is-4">
            <section className="hero is-fullheight">
              <div className="hero-heading">
                <div className="section has-text-centered">
                  <img src="/favicon.png" alt="Solarize logo" width="150px" />
                </div>
              </div>
              <div className="hero-body">
                <div className="container">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <h1 className="avatar has-text-centered section">
                        <img src="../icon.png" alt= "solarize icon" width="128px" />
                      </h1>
                      <div className="login-form">
                        <form method="POST" action="http://localhost:8080/login" className="form-signin">
                          <p className="control has-icon has-icon-right">
                            <input className="input username-input" type="text" placeholder="Username" name="username" />
                            <span className="icon user">
                              <i className="fa fa-user"></i>
                            </span>
                          </p>
                          <p className="control has-icon has-icon-right">
                            <input className="input password-input" type="password" placeholder="●●●●●●●" name="password" />
                            <span className="icon user">
                              <i className="fa fa-lock"></i>
                            </span>
                          </p>
                          <p className="control login">
                            <button className="button is-success is-outlined is-large is-fullwidth" type="submit">Login</button>
                          </p>
                        </form>

                      </div>
                      <div className="section forgot-password">
                        <p className="has-text-centered">
                          <a href="/">Forgot password</a>
                          <a href="/">Need help?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>  
          </div>
        </div>

      </div>
    )  
  }
}
console.log(Loginpage)
export default Loginpage;