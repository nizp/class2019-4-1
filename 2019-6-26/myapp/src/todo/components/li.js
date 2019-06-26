import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actiones from '../store/actions';
class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {txt,checked,id,checkedId} = this.props;
        let sClass = checked?'completed':'';
        
        return (
            <li className={sClass}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        onChange={()=>{checkedId(id)}}
                        checked={checked}
                    />
                    <label>{txt}</label>
                    <button className="destroy"></button>
                </div>
                <input 
                    className="edit" 
                    value="多多对对对" 
                    onChange={()=>{}}
                /> 
            </li>
        );
    }
}
 
export default connect(state=>(state),actiones)(Li);