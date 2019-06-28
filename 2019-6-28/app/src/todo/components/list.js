import React, { Component } from 'react';
import Li from './li';
import {connect} from 'react-redux';
import * as actiones from '../store/actions';
import {withRouter} from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // let {arr,dispatch} = this.props;
        let {arr,cAll} = this.props;
        let list = null;
        let all = false;


        if(arr.length){
            list = arr.map(item=>{
                return (
                    <Li {...{
                        key:item.id,
                        ...item
                    }}/>
                )
            });
            all = arr.every(item=>item.checked);
        }
        return (
            <section className="main">
                <input 
                    className="toggle-all" 
                    type="checkbox" 
                    // onChange={(ev)=>{dispatch(actiones.cAll(ev.target.checked))}}
                    onChange={(ev)=>{cAll(ev.target.checked)}}
                    checked={all}
                />
                <ul className="todo-list">
                   {list}
                </ul>
            </section>
        );
    }
}
 
/*
    connect(mapstatetoprops,mapdispatchtoprops)

    mapstatetoprops || mapdispatchtoprops 获取都通过this.props拿

    如果没有传mapdispatchtoprops，那么this.props就有dispatch
*/

//如果不传withRouter，那么在切换路由的时候拿不到切换路由时的路由信息
export default withRouter(connect((state,props)=>{
    console.log(props.location.pathname)
    let arr = state.arr.filter(item=>{
        switch (props.location.pathname) {
            case '/all':
                return item;
            case '/unchecked':
                return !item.checked;
            case '/checked':
                return item.checked;
            default:
                return item;
        }
    });
    return {arr}
},actiones)(Main));