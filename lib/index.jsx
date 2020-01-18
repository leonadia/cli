/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

import reducers from './reducers';
import Home from './components/home/home';
import styles from './css/main.css';

const appTarget = document.createElement('div');
appTarget.className = styles.app;
document.body.appendChild(appTarget);

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route
                exact
                component={Home}
                path="/"
            />
        </HashRouter>
    </Provider>,
    appTarget
);
