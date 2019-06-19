import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0
        }
    }

    //定义了一个改变数据的方法
    add = () =>{
        let {num} = this.state;
        num ++;
        this.setState({num});
    }
    //需要让子级把num值传给父级，父级修改
    change = (num) => {
        num %= 2;
        this.setState({num});
    }

    render() { 
        let {num} = this.state;
        return (  
            <div>
                <div>父级的{num}</div>
                <hr />
                <Btn num={num} change={this.change}/>
            </div>
        );
    }
}

class Btn extends Component {
    //constructor只会执行一次
    constructor(props) {
        super(props);
        this.state = {
            num:props.num
        };
        console.log(props)
    }

    add = () =>{
        let {num} = this.state;
        num ++;
        this.setState({num});
        this.props.change(num);
    }
    render() { 
        //只要数据修改就会执行
        let {num} = this.state;
        // console.log(num)
        return (
            <button
                onClick={this.add}
            >{num}</button>
        );
    }
}
 
 
ReactDOM.render(<App />,document.getElementById('root'));


