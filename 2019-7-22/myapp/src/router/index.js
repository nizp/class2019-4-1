import {BrowserRouter as Router,Link,Switch} from "react-router-dom";
import React, { Component } from 'react';

import routerMap from './routerMap';
import routeConfig from './router_config';
//路由的导航守卫
//https://juejin.im/post/5c31aede6fb9a04a0d570107?tdsourcetag=s_pcqq_aiomsg


function renderChildren(arr){
    let ary = [];
    function render(arr){
        arr.forEach(item=>{
            if(item.children){
                ary.push(...item.children);
                render(item.children);
            }
        })
    }
    render(arr);
    return ary;
}

class RouterConfig extends Component {
    render() {
        return (
            <Router>
                <Link to="/">去登录</Link>
                <Link to="/home">去home</Link>
                {routerMap(routeConfig)}
            </Router>
        )
    }
}
export default RouterConfig;
