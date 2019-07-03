import React from 'react';
import ReactDOM from 'react-dom';
import Provider,{connect} from './react-redux/index';
import {createStore,applyMiddleware} from 'redux';//'./redux/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import App from './app/app';




function PPa (){
    return (<div>子组件</div>)
}
function PaP (){
    return (<div>子组件2</div>)
}

function reducer(state={num:0},action){
    if(action.type === 'ADD'){
        // console.log(state)
        return {num:state.num+1}
    }
    return state;
}

let store = createStore(reducer,applyMiddleware(thunk,logger))
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById('root')
)

