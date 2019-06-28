import React from 'react';
import ReactDOM from 'react-dom';
import Provider,{connect} from './react-redux/index';
import {createStore} from 'redux';
import App from './app/app';



function PPa (){
    return (<div>子组件</div>)
}
function PaP (){
    return (<div>子组件2</div>)
}

let store = createStore(function(state={num:0},action){
    if(action.type === 'ADD'){
        console.log(state)
        return {num:state.num+1}
    }
    return state;
})
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById('root')
)

