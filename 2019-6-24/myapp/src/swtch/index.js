import React, { Component } from 'react'
import {
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import About from './about';
import About2 from './about2';
import AboutD from './aboutd';


class App extends Component {
    render() { 
        return (
            <>
                <Switch>
                    <Route path="/about/d" component={AboutD}/>
                    <Route exact path="/about/:id" component={About2}/>
                </Switch>
            </>
        );
    }
}
 
export default App;