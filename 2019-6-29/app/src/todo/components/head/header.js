import React,{Component} from 'react';
import './head.css';
import {connect} from 'react-redux';
import * as actiones from '../../store/actions';
class MyHeader extends Component {
    constructor(props) {
        super(props);
    }

    // change = (ev) => {
    //     let {value} = ev.target;
    //     this.props.writeval(value);
    // }

    keyup = (ev) =>{
        if(ev.keyCode === 13){
            this.props.addval();
        }
    }

    render() { 
        let {val,writeval} = this.props;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={val} 
                    onChange={(ev)=>{writeval(ev.target.value)}}
                    onKeyUp = {this.keyup}
                    // onChange={this.change}
                />
            </header>
        );
    }
}
 
export default connect(state=>({val:state.val}),actiones)(MyHeader);