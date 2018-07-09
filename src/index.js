import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import Login from './Login'
import NotFound from './NotFound'
import CardList from './CardList'
import {store, history} from './store/global'


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={CardList}/>
                <Route path="/login" component={Login}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);