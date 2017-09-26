
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
        <section className="hero is-primary is-large header-image">
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item" href="landing.html">
                    <img src="#" alt="Logo"></img>
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
              <form method="POST" action="http://localhost:8080/signup" class="form-signin">
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
          </div>
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
          <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
          <script type="text/javascript" src="../bulma.js"></script>      
        </section>
      </div>      
    )
  }
}
export default Signup;