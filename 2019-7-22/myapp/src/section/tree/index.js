import React, { Component } from 'react'
import * as actions from '../../store/action';
import {connect} from 'react-redux';
import {tools} from '../../tools/tools_2.0';
class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderTree = (data,pid,num=0) => {
        let {getChild} = tools;
        //render第一次是没有数据的，保证有数据
        if(Object.keys(data).length){
            let arr = getChild(data,pid);//通过id找子级
            return (
                <ul style={{paddingLeft:num}}>
                    {
                        arr.map(item=>{
                            let ul = null;
                            let sClass = 'tree-title';
                            //第一层的里面有没有数据
                            let ary = getChild(data,item.id);

                            if(ary.length){//如果有数据就需要递归
                                ul = this.renderTree(data,item.id,num+10)
                                sClass += ' open';
                            }
                            return (
                                <li>
                                    <div className={sClass}>
                                        <span><i></i>{item.title}</span>
                                    </div>
                                    {ul}
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }

    render() { 
        let {data} = this.props;
        
        /*
            通过pid去找子级,如果有子级就递归
        */
        
        let ary = this.renderTree(data,0);

        return (  
            <div className="tree-menu fix"  onselectstart="return false;">
                <ul>
                    <li>
                        <div className="tree-title tree-ico open">
                            <span><i></i>微云</span>
                        </div>
                        {ary}
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(state=>state.reducer_yun,actions)(Tree);