import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@lib'
import { Provider } from 'refit-connect'
import {BrowserRouter} from 'react-router-dom'
import store from "@store";

import axios from 'axios'

Component.prototype.axios = axios

ReactDOM.render(
    <Provider store ={ store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
