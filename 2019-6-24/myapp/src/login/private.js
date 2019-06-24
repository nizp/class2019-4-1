import React, { Component } from 'react'

class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            arr:['王旭','王冠','王猛磊','王荣']
        }
    }
    render() { 
       
        return (
            <div>
                <h2>私有的</h2>
                <ul>
                    {this.state.arr.map(item=><li>{item}</li>)}
                </ul>
                <button onClick={this.props.out}>退出</button>
            </div>
        );
    }
}
 
export default Public;