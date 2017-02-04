import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import Landing from "../components/landing";
import App from "../components/app";
import Quiz from "./quiz";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Landing} />
        <Route path="quiz" component={Quiz} />
        <Route path="*" component={Landing} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
