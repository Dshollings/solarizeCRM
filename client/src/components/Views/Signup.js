
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/landing.css"
import "./css/bulma.css"
import "jquery"
import helpers from "./js/helper.js"

class Signup extends Component {

  
   render() {
    return (
      <div>
        <div className="login-wrapper columns">
          <div className="column is-8 is-hidden-mobile hero-banner">
            <section className="hero is-fullheight is-dark header-image">
              <div className="hero-body">
                <div className="container">
                  <div className="has-text-right">
                    <h1 className="title is-1" >Sign Up</h1> <br />
                    <p className="title is-3">Become and Affiliate</p>
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
                        <form method="POST" action="/signup" class="form-signin">
                          <h2 class="form-signin-heading">Create an account</h2>
                          <label for="inputUsername" class="sr-only">Username</label>
                          <input type="text" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus />
                          <br />
                          <label for="inputPassword" class="sr-only">Password</label>
                          <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required />
                          <br />
                          <label for="inputPassword" class="sr-only">Repeat Password</label>
                          <input type="password" id="inputPassword2" name="password2" class="form-control" placeholder="Repeat Password" required />
                          <br />
                          <label for="inputEmail" class="sr-only">Email</label>
                          <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required />
                          <br />
                          <label for="inputPhone" class="sr-only">Phone Number</label>
                          <input type="text" id="inputPhone" name="phone" class="form-control" placeholder="Phone Number" required />
                          <br />
                          <label for="inputState" class="sr-only">State</label>
                          <input type="text" id="inputState" name="state" class="form-control" placeholder="State" required />
                          <br />
                          <label for="inputCompany" class="sr-only">Company Name</label>
                          <input type="text" id="inputCompany" name="company_name" class="form-control" placeholder="Company Name" required />
                          <br />
                          <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={helpers.submitUserForm}>Sign up</button>
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
export default Signup;

