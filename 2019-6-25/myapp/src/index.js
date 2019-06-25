import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import reducer from './redux/reducer';
const store = createStore(reducer);



class App extends Component {
    render() { 
        return ( 
            <div>
                <button
                    onClick={()=>{store.dispatch({type:'DELE_NUM'})}}
                >-</button>
                <span>{this.props.num}</span>
                <button
                     onClick={()=>{store.dispatch({type:'ADD_NUM'})}}
                >+</button>
            </div>
        );
    }
}

render();
store.subscribe(()=>{
    render();
});
function render(){
    ReactDOM.render(<App num={store.getState().num}/>,document.getElementById('root'));
}