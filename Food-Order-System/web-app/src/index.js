import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SupplierAuth from './Components/Supplier/Authentication/Authentication';
import OrderPage from './Components/OrderPage/OrderPage';
import AdminAuth from './Components/Admin/Authentication/Authentication';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Home from './Components/Admin/Home/Home';
import Profile from './Components/Profile/Profile';

const routing = (
    <Router>
        <Route exact path='/' component={OrderPage} />
        <Route path='/Seller' component={SupplierAuth} />

        <Switch>
            <Dashboard path='/Admin/Profile' component={Profile} />
            <Dashboard path='/Admin/Home' component={Home} />
            <Route exact path='/Admin' component={AdminAuth} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
