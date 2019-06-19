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

    render() { 
        let {num} = this.state;
        return (  
            <div>
                <div>父级的{num}</div>
                <hr />
                <Btn num={num} add={this.add}/>
            </div>
        );
    }
}

class Btn extends Component {
    render() { 
        // console.log(this.props);
        //接收父级传递的数据和方法
        let {num,add} = this.props;
        return (
            <button
                onClick={add}
            >{num}</button>
        );
    }
}


// function Btn(props){
//     let {num,add} = props;
//     return (
//         <button
//             onClick={add}
//         >{num}</button>
//     )
// }

 
ReactDOM.render(<App />,document.getElementById('root'));


