import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import {Provider} from 'react-redux';
import store from './store/index';

if(module.hot){
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('box')
)