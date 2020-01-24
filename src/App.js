import React from "react";

import Courses from "../src/components/courses/courses";
import Users from "../src/components/users/users";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./store";
const { store, persistor } = createStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <>
              <Route path="/users" component={Users} />
              <Route path="/" component={Courses} />
            </>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
