import React, { Component } from 'react'

class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            arr:['于海洋','王权士','李雨来','张又欠']
        }
    }
    render() { 
       
        return (
            <div>
                <h2>公有的</h2>
                <ul>
                    {this.state.arr.map(item=><li>{item}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default Public;