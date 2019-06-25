import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'; 



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }

    static childContextTypes = {
        num:PropTypes.number,
        color:PropTypes.string,
        changeFn:PropTypes.func
    }

    getChildContext(){
        return {
            num:this.state.num,
            color:'red',
            changeFn:(val)=>{
               this.setState({num:val})
            }
        }
    }

    render() { 
        return ( 
            <div>
                <p>父级{this.state.num}</p>
                <hr />
                <PPa/>
            </div>
        );
    }
}

class PPa extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // static childContextTypes = {
    //     num:PropTypes.number
    // }
    // getChildContext(){
    //     return {
    //         num:9
    //     }
    // }


    render() { 
        return (
            <div>
                <p>子组件{this.props.num}</p>
                <PaP/>
                <PaP2/>
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
    static contextTypes = {
        num:PropTypes.number
    }
    render() { 
        return (
            <div>孙子组件{this.context.num}</div>
        );
    }
}
class PaP2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static contextTypes = {
        num:PropTypes.number,
        color:PropTypes.string,
        changeFn:PropTypes.func
    }
    render() { 
        console.log(this.context);
        return (
            <div>

                <button onClick={()=>{this.context.changeFn(100)}}>点击</button>
                <div>孙子2组件{this.context.num}</div>
            </div>
        );
    }
}
 
ReactDOM.render(<App />,document.getElementById('root'));

