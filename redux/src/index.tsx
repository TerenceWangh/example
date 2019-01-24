import React from "react";
import ReactDOM from "react-dom";
import { Store, createStore } from 'redux'
import { Provider } from "react-redux";

import reducers from "./reducers";
import App from './components/App';
import './index.css'

const initialState = {};
const store: Store<any> = createStore(reducers, initialState);

const Root: React.SFC<{}> = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

window.addEventListener('DOMContentLoaded', () => {
  const rootE1 = document.getElementById('root')
  ReactDOM.render(<Root />, rootE1)
})