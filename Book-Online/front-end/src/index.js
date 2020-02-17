import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin/Authentication/Authentication';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import DashboardMember from './Components/Member/Dashboard/Dashboard';
import Home from './Components/Admin/Home/Home';
import Member from './Components/Admin/Home/Member/Member';
import MemberPage from './Components/Member/Home/Home';
import MemberList from './Components/Member/Member/Member';
import MyBooks from './Components/Member/Home/MyBooks/MyBooks';
import Notifications from './Components/Admin/Home/ApproveList/Approve';

const routing = (
    <Router>
        <Switch>
            <Dashboard
                path='/Admin/Home/Notifications'
                component={Notifications}
            />
            <Dashboard path='/Admin/Home/Member' component={Member} />
            <Dashboard path='/Admin/Home' component={Home} />
            <Route path='/Admin' component={Admin} />
            <DashboardMember path='/' component={MemberPage} />
            <DashboardMember path='/Member/Member' component={MemberList} />
            <DashboardMember path='/Member/MyBooks' component={MyBooks} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
