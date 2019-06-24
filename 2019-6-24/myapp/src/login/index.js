import React, { Component } from 'react'
import {
    Route,
    Link,
    Redirect 
} from 'react-router-dom';

import Login from './login';
import Public from './public';
import Private from './private';

import PPa from './link';

// localStorage.setItem('onoff',false);

class App extends Component {
    constructor(props) {
        super(props);
        //一开始没有登录
        this.state = {
            onoff:eval(localStorage.getItem('onoff'))
        }
    }

    go = () => {
       
        this.setState({onoff:true})
        localStorage.setItem('onoff',true);
    }

    out = () => {
        this.setState({onoff:false})
        localStorage.setItem('onoff',false);
    }

    render() { 
        let {onoff} = this.state;

        console.log(onoff)
        return (
            <>
                <Route path="/dhe7bx372h" children={()=>{
                    return (<PPa />)
                }} /> 
                <Route path="/private" render={()=>{
                    console.log(onoff)
                    //登录成功就进私有
                    if(onoff){
                        return (<Private {...{
                            out:this.out
                        }}/>)
                    }else{
                        //没有的话就跳登录页
                        return <Redirect to="/login" />
                    }
                    
                }} />
                <Route path="/public" component={Public} />
                <Route path="/login" component={(props)=><Login {...{
                    go:this.go,
                    ...props
                }}/>} />
            </>
        );
    }
}
 
export default App;