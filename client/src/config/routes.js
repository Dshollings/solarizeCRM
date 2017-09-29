// Inclue the React library
import React from "react";
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
// Reference the high-level components
// import UserView from "../components/Views/UserView";
// import AdminView from "../components/Views/AdminView";
import Landing from "../components/Views/Landing";
import Signup from "../components/Views/Signup";
// import AddUser from "../components/Views/User.js";
// import TableView from "../components/Views/table.js";
import Loginpage from "../components/Views/Loginpage";
  

// <Route exact path="/userview" component={UserView} />
// <Route exact path="/user" component={AddUser} />
// <Route exact path="/table" component={TableView} />
// <Route exact path="/admin" component={AdminView} />

  // Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Loginpage} />
     
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