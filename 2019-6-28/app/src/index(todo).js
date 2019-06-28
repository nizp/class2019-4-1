import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './todo/store/index';
import App from './todo/app';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            {/* <App /> */}
            <Route path="/" component={App} /> 
            <Route path="/" render={(props)=> (<Redirect to="/all" props={props} />)} />
        </Provider>
    </Router>
    ,
    document.getElementById('root')
)

