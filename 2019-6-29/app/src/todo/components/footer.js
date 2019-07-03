import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actiones from '../store/actions';
import {NavLink} from 'react-router-dom';
class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {arr} = this.props;
        return (
            <footer className="footer">
               <span className="todo-count">
                    <strong>{arr.filter(item=>!item.checked).length}</strong>
                    <span>条未选中</span>
                </span>
                <ul 
                    className="filters"
                   
                >
                    <li>
                        <NavLink activeClassName="selected" to="/all">全部</NavLink>
                        {/* <a 
                            href="#/all" 
                            className="selected"
                        >全部</a> */}
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/unchecked">未选中</NavLink>
                        {/* <a 
                            href="#/unchecked" 
                            
                        >未选中</a> */}
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/checked">已选中</NavLink>
                        {/* <a 
                            href="#/checked" 
                        >已选中</a> */}
                    </li>
                </ul>
            </footer>
        );
    }
}
export default connect(state=>({arr:state.arr}),actiones)(MyFooter);
