import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/bulma.css"
import "./css/admin.css"
import helpers from "./js/helper.js"

// Create the Main component
class AdminView extends Component {

  render() {

    return (
      <div>
         <div className="columns">
          <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
            <div>
              <div className="main">
                <img src="/favicon.png" alt="Solarize logo" width="150px" />
                <div className="title">Main</div>
                  <a href="" className="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Dashboard</span></a>
                  <a href="" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Activity</span></a>
                  <a href="" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">All Leads</span></a>
                  <a href="" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">User Profiles</span></a>
                </div>
              </div>
            </aside>
            <div className="column is-10 admin-panel">
              <nav className="nav has-shadow" id="top">
                <div className="container">
                  <div className="nav-left">
                    <a className="nav-item" href="../index.html">
                      <img src="../images/Solarize.png" alt="Your Solar Sales Solution"></img>
                    </a>
                  </div>
                  <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <div className="nav-right nav-menu is-hidden-tablet">
                    <a href="" className="nav-item is-active">
                      Dashboard
                    </a>
                    <a href="" className="nav-item">
                      Activity
                    </a>
                    <a href="" className="nav-item">
                      All Leads
                    </a>
                    <a href="" className="nav-item">
                      User Profiles
                    </a>
                  </div>
                </div>
              </nav>
              <section className="hero is-small">
      
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">
                      Solarize Dashboard
                    </h1>
                    <h2 className="subtitle">
                      Admin
                    </h2>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="columns is-mobile is-multiline">
                  <div className="column is-one-third-desktop is-full-mobile">
                    <section className="panel">
                      <p className="panel-heading">
                        All Leads
                      </p>
                      <p className="panel-tabs">
                        <a className="is-active" href="">All Time</a>
                        <a href="">Past week</a>
                        <a href="">Past month</a>
                        <a href="">Past quarter</a>
                        <a href="">Past Year</a>
                      </p>
                      <div className="panel-block">
                        <div id="chart1" style={{height: '250px'}}></div>
                      </div>
                      <div className="panel-block">
                        <button className="button is-default is-outlined is-fullwidth">
                          View Data
                        </button>
                      </div>
                    </section>
                  </div>
                  <div className="column is-one-third-desktop is-full-mobile">
                    <section className="panel">
                      <p className="panel-heading">
                        Leads by User
                      </p>
                      <div className="panel-block">
                        <div id="chart2" style={{height: '280px'}}></div>
                      </div>
                      <div className="panel-block">
                        <button className="button is-default is-outlined is-fullwidth">
                          View Data
                        </button>
                      </div>
                    </section>
                  </div>
                  <div className="column is-one-third-desktop is-full-mobile">
                    <section className="panel">
                      <p className="panel-heading">
                        Leads by Region
                      </p>
                      <div className="panel-block">
                        <div id="chart3" style={{height: '280px'}}></div>
                      </div>
                      <div className="panel-block">
                        <button className="button is-default is-outlined is-fullwidth">
                          View Data
                        </button>
                      </div>
                    </section>
                  </div>
                  <div className="column is-half-desktop is-full-mobile">
                    <section className="panel">
                      <p className="panel-heading">
                       Notifications
                     </p>
                     <div className="panel-block">
                      <div className="is-fluid notification is-warning">
                        <button className="delete">**Need Remove Function**</button>
                        <strong>Solar Sell</strong><p> New Order</p><p>150 units</p>
                        <br></br>
                        <small>1h ago | via: system</small> 
                      </div>
                      <div className="is-fluid notification">
                        <button className="delete">**Need Remove Function**</button>
                        <strong>Sky Power</strong><p> Conversion Quota Exceeded</p>
                        <br></br>
                        <small>2h ago | via: system</small> 
                      </div>
                       <div className="is-fluid notification">
                        <button className="delete">**Need Remove Function**</button>
                        <strong>Energize</strong><p> All Leads Delivered</p>
                        <br></br>
                        <small>1d ago | via: system</small> 
                      </div>
                    </div>
                  </section>
                </div>
                <div className="column is-half-desktop is-full-mobile">
                  <section className="panel">
                    <p className="panel-heading">
                      Conversions by User
                    </p>
                    <div className="panel-block">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Organization</th>
                            <th>Leads</th>
                            <th>Conversions</th>
                            <th>Coversion Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Solar Sells</td>
                            <td>5,250</td>
                            <td>525</td>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <td>Sky Power</td>
                            <td>3,000</td>
                            <td>600</td>
                            <td>20%</td>
                          </tr>
                          <tr>
                            <td>Energize</td>
                            <td>600</td>
                            <td>200</td>
                            <td>33%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="has-text-centered">
              <p>
                <strong>Copyright 2017</strong> by David Hollingsworth
              </p>
              <p>
                <a className="icon" href="https://github.com/dshollings">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
         <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      </div>
    );
  }
};

export default AdminView;