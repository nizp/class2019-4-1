import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    withRouter,
    Redirect
} from 'react-router-dom'

import './1.css';

import Index from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page3_1 from './components/page3_1';



if(module.hot){
    module.hot.accept();
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0
        }
    }

    click = () => {
        this.setState((prev)=>{
            return {num:prev.num+1}
        },()=>{
            if(this.state.num >= 3){
                this.props.history.go(0);
            }else{
                this.props.history.go(-1);
            }
        })
       
        // this.props.history.length = 0;
        // console.log(this.props.history)
    }

    render() { 
        return (
            <div>
                <NavLink exact to="/" activeClassName="active">
                    <button>首页</button>
                </NavLink>
                <NavLink to="/page2">
                    <button>娱乐</button>
                </NavLink>
                <NavLink to="/page3/">
                    <button>八卦</button>
                </NavLink>
                <button onClick={this.click}>上一步</button>

             
                    <Route exact path="/" component={Index}/>
                    <Route path="/page2" component={Page2}/>
                    
                    <Route strict path="/page3/"component={Page3} />
                    <Route path="/page3/:id" component={Page3_1}/>
                    <Route path="/page3/"  render={()=>{
                        return <Redirect to="/page3/p1"/>
                    }}/>
                   
              
            </div>
        );
    }
}



let ApP = withRouter(App)

ReactDOM.render(
    <Router>
        <ApP />
    </Router>
    ,
document.getElementById('root'));