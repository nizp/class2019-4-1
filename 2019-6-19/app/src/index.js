import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
        console.log(1);
    }
    componentWillMount() {
        console.log('挂在之前');
        console.log(document.getElementById('box'));
    }
    componentDidMount() {
        console.log('挂在之后')
        console.log(document.getElementById('box'));
    }

    //updateing阶段
    shouldComponentUpdate(next){
        //写了这个函数必须要有返回值，返回一个布尔值,默认为true，false就是不更新
        console.log('should')
        return true; //
    }
    componentWillUpdate() {
        console.log('更新之前')
    }
    componentDidUpdate() {
        console.log('更新之后')
    }

    componentWillReceiveProps(nextProps) {
        console.log('老爹')
    }

    click = () => {
        let {num} = this.state;
        num++;
        this.setState({num});
    }
    
    render() { 
        console.log('渲染');
        return ( 
            <div id="box">
                <button 
                    onClick={this.click}
                >{this.state.num}</button>
                <hr />
                <PPa num={this.state.num}/>
            </div>
        );
    }
}


class PPa extends Component {
    componentWillReceiveProps(){
        console.log('老爹2')
    }
    render() { 
        return (
            <div>子级{this.props.num}</div>
        );
    }
}


ReactDOM.render(<App />,document.getElementById('root'));