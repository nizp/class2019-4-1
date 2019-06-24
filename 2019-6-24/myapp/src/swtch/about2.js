import React, { Component } from 'react'

class About2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // console.log();
        let {id} = this.props.match.params;
        let styles = {
            width:'100px',
            height:'100px'
        }
        if(id === 'a'){
            styles.background = 'red';
        }else if (id === 'b'){
            styles.background = 'yellow';
        }else{
            styles.background = 'green';
        }
        return (
            <>
              <h2>关于子页</h2>
              <div style={styles}></div>
            </>
        );
    }
}
 
export default About2;