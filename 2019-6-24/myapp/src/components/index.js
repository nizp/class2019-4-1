import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom';

import Home from './home';
import About from './about';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
            </>
        );
    }
}
 
export default App;