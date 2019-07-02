import React, { Component } from 'react'
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="modal-tree">
                <h2>选择存储位置</h2>
                <p className="folderName">我的文档</p>
                <div className="content">
                    
                </div>
                <div className="footer">
                    <input type="button" name="" className="cancel" value="取消" />
                    <input type="button" name="" className="ok" value="确定" />
                    <p className="tip"></p>
                </div>
                <i className="icon_close"></i>
            </div>
        );
    }
}
 
export default Section;