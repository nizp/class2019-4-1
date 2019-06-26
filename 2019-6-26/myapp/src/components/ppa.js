import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../store3/action';

class PPa extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let {num,incrment2,deincrment2} = this.props;
        return (
            <div>
                <button onClick={deincrment2}>-</button>
                <span>{num}</span>
                <button onClick={incrment2}>+</button>
        
            </div>
            
        );
    }
}
export default connect(state=>({num:state.reducer2.num2}),actions)(PPa);