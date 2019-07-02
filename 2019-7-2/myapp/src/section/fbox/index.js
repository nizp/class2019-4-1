import React, { Component } from 'react';
import * as actions from '../../store/action';
import {connect} from 'react-redux';
class Fbox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        //img/folder-b.png
        let {changePid,changeId,arr} = this.props; 
        let list = null;
        if(arr.length){
            list = arr.map(item=>{
                let sClass = item.checked?'file-item active':'file-item';
                return (
                    <div 
                        className={sClass}
                        key={item.id}
                    >
                        <img 
                            src={require('../../img/folder-b.png')} 
                            alt=""
                            onDoubleClick={()=>{changePid(item.id)}} 
                        />
                        <span className="folder-name">{item.title}</span>
                        <input type="text" className="editor"/>
                        <i 
                            className={item.checked?'checked':''}
                            onClick={()=>{changeId(item.id)}}
                        ></i>
                    </div>
                )
            })
        }
        
       
        return (  
            <div id="fBox">
            <div className="folders">
                {/* <!-- 这个是操作的东西 --> */}
                {list}
            </div>
            <div className="kuang"></div>
        </div>
        );
    }
}
 
export default connect(state=>state,actions)(Fbox);