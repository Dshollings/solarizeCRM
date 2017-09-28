import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'chartist';
import 'arrive';
import 'bootstrap-notify'
// import "./css/bulma.css"
// import "./css/admin.css"
import helpers from "./js/helper.js"
// import "./css/bootstrap.min.css"
import "./css/material-dashboard.css"
// import "./css/demo.min.css"

// import leadArray from './js/leadTable.js'

// Create the Main component
class TableView extends Component {

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
            <li>
              <a href="/notifications">
                <i className="material-icons text-gray">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
          </ul>
        </div>
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
                <a className="navbar-brand" href="#"> Lead Table </a>
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
            <div className="col-md-12">
              <div className="card">
                <div className="card-header" data-background-color="blue">
                  <h4 className="title">Leads</h4>
                  <p className="category">List of all the leads</p>
                </div>
                <div className="card-content table-responsive">
                  <table id="table1" height="280px" className="table table-hover">
                    <thead>
                     { helpers.populateLeadTable1 }
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header" data-background-color="purple">
                <h4 className="title">Leads By State</h4>
                <p className="category">Use the dropdown to select leads by state.</p>
                <select id="statelist" name="state_full_name">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="ca">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <button type="button" id= "submitstate" class="btn btn-secondary" onClick={ helpers.populateLeadTable2 } >Submit</button>
              </div>
              <div className="card-content table-responsive">
                <table id="table2" height="280px" className="table table-hover" onpageshow="sortTable(0)">
                  <thead>
                    <tr>
                      <th>Name </th>
                      <th>Phone</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container-fluid">
        <nav className="pull-right">
          <ul>
            <li>
              <a href="/dashboard">
                DashBoard
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
          </ul>
        </nav>
      </div>
    </footer>
    </div>
    </div>

    )
  }
}

//<table id="table2" height="280px" className="table table-hover" onpageshow="sortTable(0)">
//  <thead>
//    <tr>
//      <th onClick={helpers.sortTable2(0) }>Name </th>
//      <th onClick={helpers.sortTable2(1) }>Phone</th>
//      <th onClick={helpers.sortTable2(2) }>Address</th>
//    </tr>
//  </thead>
//</table>
export default TableView;