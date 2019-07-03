import {BrowserRouter as Router,Route} from "react-router-dom";
import React, { Component } from 'react';
import routeConfig from './router_config';


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

console.log(renderChildren(routeConfig))



class App extends Component {
    render() { 
        return (
            <Router>
                {renderRoutes(routeConfig)}
                {renderRoutes(renderChildren(routeConfig))}
            </Router>
        );
    }
}
 
export default App;
