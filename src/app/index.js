import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./configurestore";
import Root from "./containers/root";

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  window.document.getElementById('root')
);
