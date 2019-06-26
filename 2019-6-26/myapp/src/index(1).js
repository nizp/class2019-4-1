import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import store,{actionCreators} from './store/index';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        //this.bindActionCreators = bindActionCreators(actionCreateors,store.dispatch)
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({num:store.getState().num});
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


ReactDOM.render(<App />,document.getElementById('root'));

