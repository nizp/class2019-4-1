import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router/index';
import {Provider} from 'react-redux';
import store from './store/index';


if(module.hot){
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    document.getElementById('box')
)