import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/bulma.css"
import "./css/admin.css"
import helpers from "./js/helper.js"

// import leadArray from './js/leadTable.js'

// Create the Main component
class UserView extends Component {

  render() {
    return (
      <div>
        <div className="columns">
          <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
            <div>
              <div className="main">
                <img src="/favicon.png" alt="Solarize logo" width="150px" />
                <div className="title">Main</div>
                <Link to="" className="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Dashboard</span></Link>
                <Link to="" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Activity</span></Link>
                <Link to="" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">All Leads</span></Link>
                <Link to="" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">User Profiles</span></Link>
              </div>
            </div>
          </aside>
          <div className="column is-10 admin-panel">
            <nav className="nav has-shadow" id="top">
              <div className="container">
                <div className="nav-left">
                  <Link to="" className="nav-item" href="../index.html">
                    <img src="../images/Solarize.png" alt="Your Solar Sales Solution"></img>
                  </Link>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu is-hidden-tablet">
                  <Link to="" className="nav-item is-active">
                    Dashboard
                  </Link>
                  <Link to="" className="nav-item">
                    Activity
                  </Link>
                  <Link to="" className="nav-item">
                    All Leads
                  </Link>
                </div>
              </div>
            </nav>
            <section className="hero is-small">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Solarize Dashboard
                  </h1>
                  <h2 className="subtitle username">
                    User
                  </h2>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="columns is-mobile is-multiline">
                <div className="column is-full-desktop is-full-mobile">
                  <section className="panel">
                    <p className="panel-heading">
                      All Leads
                    </p>
                    <p className="panel-tabs">
                      <Link className="is-active" to="">All</Link>
                      <Link to="">Leads Viewed</Link>
                      <Link to="">Leads Contacted</Link>
                      <Link to="">Leads Converted</Link>
                      <Link to="">Leads Abandoned</Link>
                    </p>
                    <div className="panel-block">
                      <table id="table1" className="table is-bordered is-striped is-narrow is-fullwidth">
                        <thead>
                          <tr>
                            <th>Lead ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Contacted</th>
                            <th>Converted</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12345</td>
                            <td>Jerry Seinfeld</td>
                            <td>New York</td>
                            <td>Jerry.Seinfeld@jerryseinfeld.com</td>
                            <td><Link to=""> <i className="fa fa-phone" aria-hidden="true">5555555555</i></Link></td>
                            <td><Link to=""> <i id= "viewed" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                            <td><Link to=""> <i id= "contacted" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                            <td><Link to=""> <i id= "converted" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                          </tr>
                          <tr>
                            <td>123456</td>
                            <td>Mike Tyson</td>
                            <td>Nevada</td>
                            <td>Mtyson@gmail.com</td>
                            <td><Link to=""> <i className="fa fa-phone" aria-hidden="true">5555555556</i></Link></td>
                            <td><Link to=""> <i id= "viewed" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                            <td><Link to=""> <i id= "contacted" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                            <td><Link to=""> <i id= "converted" className="fa fa-sun-o" aria-hidden="true"></i></Link></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-block">
                      <button className="button is-default is-outlined is-fullwidth">
                        View Data
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      </div>
    )
  }
}

export default UserView;