import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PPa from './components/ppa'
import MyContext from './context.js';
const {Provider} = MyContext;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:10
        }
    }
    changeNum = () => {
        this.setState((prev)=>({num:prev.num+1}));
    }

    render() { 
        return ( 
            <Provider value={{num:this.state.num,changeNum:this.changeNum}}>
                <div>
                    <p>父级{this.state.num}</p>
                    <hr />
                    <PPa/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));


