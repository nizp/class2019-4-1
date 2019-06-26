import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import store,{actionCreators} from './store2/index';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().reducer1
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({num:store.getState().reducer1.num});
        });
    }
    componentWillUnmount() {
        this.unsubscribe(); //解除监听
    }
    
    render() { 
        return (
            <div>
                {/* <button onClick={actionCreateors.deincrment}>-</button> */}
                <button onClick={actionCreators.deincrment}>-</button>
                <span>{this.state.num}</span>
                <button onClick={actionCreators.incrment}>+</button>
                {/* <button onClick={actionCreateors.incrment}>+</button> */}
            </div>
            
        );
    }
}


class PPa extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().reducer2
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({num2:store.getState().reducer2.num2});
        });
    }
    componentWillUnmount() {
        this.unsubscribe(); //解除监听
    }
    
    render() { 
        return (
            <div>
               
                <button onClick={actionCreators.deincrment2}>-</button>
                <span>{this.state.num2}</span>
                <button onClick={actionCreators.incrment2}>+</button>
               
            </div>
            
        );
    }
}


ReactDOM.render(<div>
    <App />
    <PPa />
</div>,document.getElementById('root'));

