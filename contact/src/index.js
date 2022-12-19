import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter as Route } from "react-router-dom"
import {createStore} from "redux"
import contactReducer from "./redux/reducer/contactReducer"
import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"

const store=createStore(contactReducer,composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
    <Route>
    <App />
    </Route>
  </Provider>
);



