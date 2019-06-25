import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    render() { 
        return ( 
            <div>
                <p>父级{this.state.num}</p>
                <hr />
                <PPa num={this.state.num}/>
            </div>
        );
    }
}

class PPa extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <p>子组件{this.props.num}</p>
                <PaP num2={this.props.num}/>
                <PaP2 num2={this.props.num}/>
            </div>
        );
    }
}

class PaP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num2:10
        }
    }
    render() { 
        return (
            <div>孙子组件{this.state.num2}</div>
        );
    }
}
class PaP2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>孙子2组件{this.props.num2}</div>
        );
    }
}
 

 


ReactDOM.render(<App />,document.getElementById('root'));

