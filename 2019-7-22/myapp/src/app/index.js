import React, { Component } from 'react';
import '../css/css.css';
import MyHeader from '../header/index';
import MoveTree from '../model_tree/index';
import Section from '../section/index';
import * as actions from '../store/action';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

/*
    前端:
        请求接口
           1.单纯的请求接口 -> axios （api_fn.get）

           2. action:
               （1）组件调用一个thunk函数
                    调用接口
                        if(成功){
                            发起action
                        }else{
                            失败
                            return false
                        }

                （2）发起action的函数


    后端:
        吐接口
*/


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        //获取数据
        // console.log(this.props);
        // let {loginonOff,history} = this.props;
        // if(!loginonOff){
        //     history.push('/');
        //     return;
        // }
        this.props.getDate('/list');
    }
    render() { 
      
        return (
            <div>
                <MyHeader/>
                <Section />
            </div>
        );
    }
}
 
export default connect(state=>(state.reducer_user),actions)(App);