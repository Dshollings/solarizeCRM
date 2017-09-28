import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'chartist';
import 'arrive';
import 'bootstrap-notify'
// import "./css/bulma.css"
// import "./css/admin.css"
import helpers from "./js/helper.js"
// import "/css/bootstrap.min.css"
import "./css/material-dashboard.css"
import "./css/demo.css"

// import leadArray from './js/leadTable.js'

// Create the Main component
class AddUser extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="sidebar" data-color="blue" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="http://www.github.com" className="simple-text">Solarize</a>
            </div>
          </div>
          <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active">
            <a href="dashboard">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/user">
              <i className="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="/table">
              <i className="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a href="/maps">
              <i className="material-icons">location_on</i>
              <p>Maps</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="main-panel">
          <nav className="navbar navbar-transparent navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"> Profile </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="material-icons">dashboard</i>
                      <p className="hidden-lg hidden-md">Dashboard</p>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="material-icons">notifications</i>
                      <span className="notification">5</span>
                      <p className="hidden-lg hidden-md">Notifications</p>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Mike John responded to your email</a>
                      </li>
                      <li>
                        <a href="#">You have 5 new tasks</a>
                      </li>
                      <li>
                        <a href="#">You're now friend with Andrew</a>
                      </li>
                      <li>
                        <a href="#">Another Notification</a>
                      </li>
                      <li>
                        <a href="#">Another One</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="material-icons">person</i>
                      <p className="hidden-lg hidden-md">Profile</p>
                    </a>
                  </li>
                </ul>
                <form className="navbar-form navbar-right" role="search">
                  <div className="form-group  is-empty">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="material-input"></span>
                  </div>
                  <button type="submit" className="btn btn-white btn-round btn-just-icon">
                    <i className="material-icons">search</i>
                    <div className="ripple-container"></div>
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Edit Profile</h4>
                      <p className="category">Complete your profile</p>
                    </div>
                    <div className="card-content">
                      <form>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">Company </label>
                              <input type="text" id="company_name" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">Username</label>
                              <input type="text" id="user_name" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">User Password</label>
                              <input type="text" id="user_password" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group label-floating">
                              <label className="control-label">Email</label>
                              <input type="email" id="email" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group label-floating">
                              <label className="control-label">Phone</label>
                              <input type="text" id="phone" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">State</label>
                              <input type="text" id="state" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <button type="submit" id="formsub" className="btn btn-primary pull-right">Update Profile</button>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-profile">
                <div className="card-avatar">
                  <a href="#pablo">
                    <img src="/favicon.png" alt="Solarize logo"/>
                  </a>
                </div>
                <div className="content">
                  <h6 className="category text-gray">CEO's / Co-Founders</h6>
                  <h4 className="card-title">Alex Himchak, David Hollingsworth, Sungwoo Hurr, Thomas Mercer </h4>
                  <p className="card-content">
                    We dedicate ourselves to getting you the best customers.
                  </p>
                  <a href="#pablo" className="btn btn-primary btn-round">Follow</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  </div>
  </div>  
    )
  }
}
export default AddUser;