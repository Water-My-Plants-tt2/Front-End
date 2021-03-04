import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/UserPlants.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import RegisterForm from "./components/Register"
import MyPlants from "./components/MyPlants";
import EditProfile from "./components/EditProfile";


ReactDOM.render(
    <Router>
      <App />
      <Switch>
        <Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={RegisterForm} />
				<PrivateRoute path="/plants" component={MyPlants} />
				<PrivateRoute path="/profile" component={EditProfile} />
			</Switch>
    </Router>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
