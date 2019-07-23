import {withRouter} from "react-router-dom";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store/setmapstateprops';

class RouterSw extends Component{
    componentWillMount() {
        //守卫要做什么事就在这做
        let { history: { replace },loginonOff,match} = this.props;

        //每次切换路由的时候判断一些是否为登录状态
        if(!loginonOff){
            replace('/'); //如果没有登录就跳转到登录页
        }else{
            //如果是登录状态，跳登录页，就直接跳到home
            if(match.path === '/'){
                replace(localStorage.getItem('path')||'/');
            }     
        }
        // console.log('路由跳转前的拦截')
    }

    componentDidMount(){
        const {match} = this.props;
        //每次路由完成的时候都记录一下path值给跳转的守卫时候用
        localStorage.setItem('path',match.path);
    }
    render(){
        const {component:Com,...props} = this.props;
        return (
            <>
               <Com {...props}/>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps)(RouterSw));