import React, { Component } from 'react'
import * as actions from '../../store/action';
import {connect} from 'react-redux';
import {tools} from '../../tools/tools_2.0';
class Bread extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {data,pid,changePid} = this.props;
        let {getParents} =  tools;
        let len = Object.keys(data).length;
        let list = null;
        if(len){
            list = getParents(data,pid).map((item,i,all)=>{
                return (
                    i === all.length-1 ?
                    <span 
                        id={item.id}
                        key={item.id}
                        onClick = {()=>{changePid(item.id)}}
                    >{item.title}</span>:
                    <a 
                        href="javascript:;"
                        id={item.id}
                        key={item.id}
                        onClick = {()=>{changePid(item.id)}}
                    >{item.title}</a>
                )
            })
        }

       
        return (  
            <div className="bread-nav" onselectstart="return false;">
                {list}
            </div>
        );
    }
}

export default connect(state=>state.reducer_yun,actions)(Bread);
 