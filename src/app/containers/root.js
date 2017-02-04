import React from "react";
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import { Provider } from "react-redux";
import Landing from "../components/landing";
import App from "../components/app";
import Quiz from "./quiz";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRedirect to="home" />
        <Route path="quiz" component={Quiz} />
        <Route path="*" component={Landing} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
