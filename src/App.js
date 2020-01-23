import React from "react";

import Courses from "../src/components/courses/courses";
import Users from "../src/components/users/users";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
