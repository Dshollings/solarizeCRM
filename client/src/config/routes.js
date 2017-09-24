// Inclue the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import UserView from "../components/Views/UserView";
import AdminView from "../components/Views/AdminView";
import Landing from "../components/Views/Landing";

// Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Landing}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="user" component={UserView} />
      <Route path="admin" component={AdminView} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);
