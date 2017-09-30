
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/bulma.css"
import "./css/landing.css"
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
              <span className="nav-toggle">
                <div className="nav-left">
                <a className="nav-item" href="/landing.html">
                 <img src="/favicon.png" alt="Solarize logo"/>
                </a>
              </div>
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-light is-outlined" href="/signup">
                      <span>Become an Affiliate</span>
                    </a>
                  </div>
                </span>
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-light is-outlined" href="/login">
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
            <img src="/favicon.png" alt="Logo" height="120" width="120" />
            <h1 className="title is-2" id="main-title">Solarize</h1>
            <h2 className="subtitle is-5" id="sub-title">Join the Solar Revolution Today</h2>
            <br></br>
            <br></br>
            <div>
              <div className="modal" id="modal1">
                <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">Request Free Quote</p>
                      <button className="delete" aria-label="close" onClick={helpers.closeModal}></button>
                    </header>
                      <section className="modal-card-body">
                    <fieldset>
                        <p>FIND OUT HOW MUCH YOU CAN SAVE</p>
                        <input type="hidden" name="oid" value="00D80000000dNiA" />
                        <input type="hidden" name="retURL" value="#" />
                        <div>
                          <input id="first_name" maxLength="40" name="first_name" size="20" type="text" placeholder="First Name" required="" />
                        </div>
                        <div>
                          <input id="last_name" maxLength="80" name="last_name" size="20" type="text" placeholder="Last Name" required="" />
                        </div>
                        <div>
                          <input id="email" maxLength="80" name="email" size="20" type="email" placeholder="Email Address" required="" />
                        </div>
                        <div>
                          <input id="phone" maxLength="15" name="phone" size="20" type="tel" placeholder="Phone" required="" />
                        </div>
                        <div>
                          <input id="streetAddress" name="street" size="20" placeholder="Street Address" />
                        </div>
                        <div>
                          <div className="tier">
                            <input id="city" maxLength="40" name="city" size="20" type="text" placeholder="City" />
                          </div>
                          <div>
                            <div className="tier">
                              <select id="statelist" name="state_full_name">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
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
                            </div>
                          </div>
                          <div className="tier">
                            <input id="zip" maxLength="5" name="zip" size="20" type="text" placeholder="Zip" />
                          </div>
                        </div>
                      </fieldset>
                    </section>
                  <footer className="modal-card-foot">
                    <button className="button is-success" id="butSubmit" onClick={helpers.getLeadForm}>Save changes</button>
                    <button className="button is-danger" id="cancel" onClick={helpers.closeModal}>Cancel</button>
                  </footer>
                </div>
              </div>
              <a className="button is-outlined" id="showModal" href="https://solarizeinfo.herokuapp.com/leadinfo">
                <span>Request Quote</span>
              </a>
            </div>
          </div>
        </div>
        <div className="modal" id="modal2">
          <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Thank You For Submitting!</p>
                <button className="delete" aria-label="close" onClick={helpers.closeModal}></button>
              </header>
              <footer className="modal-card-foot">
                <button className="button is-danger" id="close" onClick={helpers.closeModal}>Close</button>
              </footer>
          </div>
        </div>
        <a className="button is-outlined" id="showModal" />
        </section>
        <div className="section main">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <h3 className="has-text-centered"><i className="fa fa-money icon-block"></i></h3>
                    <br />
                    <h3 className="infotitle">Reduce your electric bill</h3>
                    <br />
                    <p className="pbody">Whether you’re a homeowner, business, or nonprofit, electricity costs can make up a large portion of your monthly expenses. With a solar panel system, you’ll generate free power for your system’s entire 25+ year lifecycle. Solar panels will reduce your utility bills and you’ll still save a lot of money.</p>
                    <p className="has-text-centered"><a target="_blank" rel="noopener noreferrer" href="https://www.energysage.com/solar/why-go-solar/eliminate-electric-bills/" className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-globe icon-block"></i></p>
                    <br />
                    <h3 className="infotitle">Help save the environment</h3>
                    <br />
                    <p className="pbody">Solar is a great way to reduce your carbon footprint. Buildings are responsible for 38 percent of all carbon emissions in the U.S., and going solar can significantly decrease that number. A typical residential solar panel system will eliminate three to four tons of carbon emissions each year—the equivalent of planting over 100 trees annually.</p>
                    <p className="has-text-centered"><a target="_blank" rel="noopener noreferrer" href="https://www.energysage.com/solar/why-go-solar/protect-the-environment/" className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <h3 className="has-text-centered"><i className="fa fa-line-chart icon-block"></i></h3>
                    <br />
                    <h3 className="infotitle">Protect against rising energy costs</h3>
                    <br />
                    <p className="pbody">One of the most clear cut benefits of solar panels is the ability to hedge utility prices. In the past ten years, residential electricity prices have gone up by an average of three percent annually. By investing in a solar energy system now, you can fix your electricity rate and protect against unpredictable increases in electricity costs.</p>
                    <p className="has-text-centered"><a target="_blank" rel="noopener noreferrer" href="https://www.energysage.com/solar/why-go-solar/eliminate-electric-bills/https://www.energysage.com/solar/why-go-solar/reduce-energy-costs/" className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p><strong>Solarize © 2017</strong></p>
              <p><a className="icon" href=""><i className="fa fa-github"></i></a></p>
            </div>
          </div>
        </footer>
      </div>      
      )
    }
  }
export default Landing;