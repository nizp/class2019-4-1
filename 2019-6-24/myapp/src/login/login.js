import React, { Component } from 'react'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    click = () => {
        this.props.go();
        this.props.history.push('/private');
    }
    render() { 
        // console.log(this.props);
        return (
            <div>
               <button onClick={this.click}>登录</button>
            </div>
        );
    }
}
 
export default Login;