import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'

import './1.css';

import Index from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';


if(module.hot){
    module.hot.accept();
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                <NavLink to="/page3">
                    <button>八卦</button>
                </NavLink>

                <Route exact path="/" component={Index}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>
            </div>
        );
    }
}




ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
document.getElementById('root'));