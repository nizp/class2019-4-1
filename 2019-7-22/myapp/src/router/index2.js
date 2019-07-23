import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import React, { Component } from 'react';
import routeConfig from './router_config';
import {connect} from 'react-redux';
import {Login} from '../login/index';
//路由的导航守卫
//https://juejin.im/post/5c31aede6fb9a04a0d570107?tdsourcetag=s_pcqq_aiomsg



// import {get} from '../api_fn/index';

function RouterSw(MyComponent){
    return class extends Component{
        render(){
            const {loginonOff,match} = this.props;
            
            // console.log(loginonOff);

            /*
                跳路由的时候，是先看用户是否登录，还是先看是否当前页在/下
            */

            // if(!loginonOff){
            //     return <Redirect to="/"/>
            // }

            //根据条件的判断，来操作要不要使用这个路由
            if(match.path!=='/'){
                console.log(match.path+'进1')
                if(loginonOff){
                    console.log(match.path+'进2denglu');
                    return (
                        <>
                            <MyComponent {...this.props} />
                        </>
                    )
                }else{
                    console.log(match.path+'进3meidenglu')
                    return (
                       <Redirect to="/"/>
                    )
                }
            }else{
                return <MyComponent {...this.props} />
            }
        }
    }
}



function renderRoutes(routeConfig){
    return routeConfig.map((item,i)=>{
        return (
            <Route 
                {...{
                    key:i,
                    // component:connect(state=>state.reducer_user)(RouterSw(item.component)),
                    render:(props)=>{
                        return RouterSw(item.component);     
                    },
                    path:item.path,
                    exact:item.exact || false
                }}
            />
        )
    })
}

/*

// render:
                    // (props)=>{
                    //     // get('/get').then((d)=>{
                    //     //     if(d.code === 0){
                    //     //             return (<item.component {...props}/>);
                    //     //     }else{
                    //     //         // return (<Login />)
                    //     //     }
                    //     // });
                    //     // console.log(d);
                        
                    // },

*/


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
                {/* 
                <Link to="/home">详情</Link> */}
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
