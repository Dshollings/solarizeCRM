// Inclue the React library
import React from "react";
import { IndexRoute, browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Redirect, withRouter} from "react-router-dom";
// Reference the high-level components
import UserView from "../components/Views/UserView";
import AdminView from "../components/Views/AdminView";
import Landing from "../components/Views/Landing";
import Signup from "../components/Views/Signup";
import Loginpage from "../components/Views/Loginpage";
  
  // Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/user" component={UserView} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Loginpage} />
      <Route exact path="/admin" component={AdminView} />
    </div>
  </Router>
);


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)