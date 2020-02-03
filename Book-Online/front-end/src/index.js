import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './Components/Admin/Authentication/Authentication';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Admin/Home/Home';
import Member from './Components/Admin/Member/Member';
import MemberPage from './Components/Member/Home/Home';
import MemberList from './Components/Member/Member/Member';

const routing = (
    <Router>
        <Dashboard path='/Admin/Home' component={Home} />
        <Dashboard path='/Admin/Member' component={Member} />
        <Dashboard path='/Member/Home' component={MemberPage} />
        <Dashboard path='/Member/Member' component={MemberList} />
        <Route exact path='/' component={Admin} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
