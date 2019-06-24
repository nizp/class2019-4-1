import React, { Component } from 'react'

import About2 from './about2'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let styles = {
            width:'100vw',
            height:'100vh',
            background:'skyblue'
        }
        return (
            <div style={styles}>
                <div>关于</div>
                <hr />
                <About2 />
            </div>
        );
    }
}
 
export default Home;