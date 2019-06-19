import React from 'react';
import ReactDOM from 'react-dom';
// import App from './todolist/app';
import App from './todo/app';
if(module.hot)module.hot.accept();



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);