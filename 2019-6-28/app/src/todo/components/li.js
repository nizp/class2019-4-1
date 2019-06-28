import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actiones from '../store/actions';
class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onoff:false,
            esc:false
        }
    }

    db = () => {
        this.setState({onoff:true},()=>{
            this.refs.txt.value = this.props.txt;
            this.refs.txt.focus();

        });
    }

    blur = (ev) => {
        if(!this.state.esc){
            let {value} = ev.target;
            let {id,dbc} = this.props;
            dbc(id,value);
        }
        this.setState({onoff:false,esc:false});
    }

    esc = (ev) => {
        if(ev.keyCode === 27){
            console.log('进')
            this.setState({onoff:false,esc:true});
        }
    }


    render() { 
        let {txt,checked,id,checkedId,rm} = this.props;
        let {onoff} = this.state;
        // editing
        let sClass = checked?'completed':'';
        if(onoff){
            sClass += ' editing';
        }
        
        return (
            <li className={sClass}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        onChange={()=>{checkedId(id)}}
                        checked={checked}
                    />
                    <label
                        onDoubleClick={this.db}
                    >{txt}</label>
                    <button 
                        className="destroy"
                        onClick={()=>{rm(id)}}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    onChange={()=>{}}
                    ref="txt"
                    onBlur={this.blur}
                    onKeyUp={this.esc}
                /> 
            </li>
        );
    }
}
 
export default connect(state=>(state),actiones)(Li);