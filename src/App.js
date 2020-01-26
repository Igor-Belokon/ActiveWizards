import React from "react";

import "../src/components/style.css";

import Courses from "../src/components/courses/courses";
import Users from "../src/components/users/users";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./store";
const { store, persistor } = createStore();

function App() {
  return (
    <div className="app-style">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <>
              <Route path="/users" component={Users} />
              <Route path="/" component={Courses} />
              <Route path="/corses" component={Courses} />
            </>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
