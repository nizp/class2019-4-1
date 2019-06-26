import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import store,{actionCreators} from './store2/index';
import {Provider} from 'react-redux';
import App from './components/app';
import PPa from './components/ppa';



ReactDOM.render(
    <Provider store={store}>
        <App />
        <PPa />
    </Provider>,
    document.getElementById('root'));

