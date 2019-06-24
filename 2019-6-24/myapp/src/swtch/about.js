import React, { Component } from 'react'
import {
    Route,
    Link,
    Redirect 
} from 'react-router-dom';
class About2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let styles = {
            width:'100vw',
            height:'30vh',
            background:'skyblue'
        }
        return (
            <div style={styles}>
                <div>关于</div>
                <hr />
                <Link to="/about/a" >去a</Link>
                <Link to="/about/b" >去b</Link>
                <Link to="/about/c" >去c</Link>
                
            </div>
        );
    }
}
 
export default About2;