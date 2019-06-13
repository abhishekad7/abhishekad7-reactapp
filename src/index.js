import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
//import {Route, Link, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
