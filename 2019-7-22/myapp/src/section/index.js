import React, { Component } from 'react'
import Bread from './bread/index';
import Tree from './tree/index';
import Fbox from './fbox/index';
import * as actions from '../store/action';
import {connect} from 'react-redux';
import {tools} from '../tools/tools_2.0';
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {arr,changeAll} = this.props; 
        let all = false;
        //全选
        if(arr.length){all = arr.every(item=>item.checked)?'checked':'';}
        return (  
            <section id="section">
                <Tree />
                <div className="folder-content">
                    <div className="breadmenu">
                        <div className="checkall">
                            <i 
                                id="checkedAll" 
                                className={all}
                                onClick={()=>{changeAll(!all)}}
                            ></i>
                        </div>
                        {/* 面包屑 */}
                        <Bread />
                    </div>
                    <div className="f-empty"></div>
                    <div id="yj-list">
                        <span className="dl">下载</span>
                        <span className="mv">移动到</span>
                        <span className="de">删除</span>
                        <span className="rn">重命名</span>
                        <span className="sh">分享</span>
                    </div>
                    {/* Fbox */}
                    <Fbox />
                </div>
            </section>
        );
    }
}
export default connect(state=>state.reducer_yun,actions)(Section);
 