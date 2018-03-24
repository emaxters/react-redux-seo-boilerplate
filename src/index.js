import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";

import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';

import Page from './containers/Page';
import Home from './components/Home';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <Switch>
            <Route path="/page" component={Page} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));