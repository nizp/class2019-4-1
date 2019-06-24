import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let styles = {
            width:'100vw',
            height:'100vh',
            background:'pink'
        }
        return (
            <>
              <div style={styles}>首页</div>
            </>
        );
    }
}
 
export default Home;