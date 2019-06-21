import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router,Route} from 'react-router-dom';


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
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

function Home(){
    return (
        <div>Home</div>
    )
}
function About(){
    return (
        <div>About</div>
    )
}
 

ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,document.getElementById('root')
)