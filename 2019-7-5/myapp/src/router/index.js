import {BrowserRouter as Router,Route} from "react-router-dom";
import React, { Component } from 'react';
import routeConfig from './router_config';

//路由的导航守卫
//https://juejin.im/post/5c31aede6fb9a04a0d570107?tdsourcetag=s_pcqq_aiomsg



function renderRoutes(routeConfig){
    return routeConfig.map((item,i)=>{
       
        return (
            <Route 
                {...{
                    key:i,
                    component:item.component,
                    path:item.path,
                    exact:item.exact || false
                }}
            />
        )
    })
}

{/* <Route path="/" children={()=>{
    return (<Route path="/list" children={()=>(<div>123</div>)}/>)
}} /> */}


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

// console.log(renderChildren(routeConfig))



class RouterConfig extends Component {
    render() { 
        // console.log(1);
        return (
            <Router>
                {renderRoutes(routeConfig)}
            </Router>
        )
        // return denglu?(
        //     <Router>
        //         {/* <Route path="/" component={}/>
        //         <Route path="/home" component={}/> */}

        //         {renderRoutes(routeConfig)}
        //         {/* {renderRoutes(renderChildren(routeConfig))} */}
        //     </Router>
        // ):(<Router>
        //     <Route path="/" />
        // </Router>)
    }
}
 
export default RouterConfig;
