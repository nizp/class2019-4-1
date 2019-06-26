import React, { Component } from 'react';
import Li from './li';
import {connect} from 'react-redux';
import * as actiones from '../store/actions';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {arr} = this.props;
        let list = null;
        if(arr.length){
            list = arr.map(item=>{
                return (
                    <Li {...{
                        key:item.id,
                        ...item
                    }}/>
                )
            })
        }
        return (
            <section className="main">
                <input 
                    className="toggle-all" 
                    type="checkbox" 
                    onChange={()=>{}}
                />
                <ul className="todo-list">
                   {list}
                </ul>
            </section>
        );
    }
}
 
export default connect(state=>({arr:state.arr}),actiones)(Main);