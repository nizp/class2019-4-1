import React, { Component } from 'react'
import MyContext from '../context';

let {Consumer} = MyContext;
// console.log(MyContext,Consumer)
class PaP extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            num2:0
        }
        // console.log(this.context);
    }
    static contextType = MyContext

    add = () => {
        this.setState({
            num2:this.state.num2 + 1
        })
    }

    componentDidMount() {
        let value = this.context
        this.setState({num2 :value.num });
    }

    change = (val) => {
        this.setState({ num2: val});
    }
    render() { 
        // let value = this.context;
        // console.log(value)

        return (
            <div>
                <button onClick={this.add}>点击自增</button>
                <p>孙子组件{this.state.num2}</p>
            </div>
        );
    }
}

export default PaP;