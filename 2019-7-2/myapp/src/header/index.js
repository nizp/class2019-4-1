import React, { Component } from 'react'
class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //./img/mouse.png
        return (  
            <div>
                 <header id="head">
                    <div id="top">
                        <h1 className="title">
                            <a href="#" title=""><img src="" alt="" /> </a>
                        </h1>
                        <div className="right">
                            <div className="user">
                                <span><img src="img/user-ico.jpg" alt="" /></span>
                                <i></i>
                            </div>
                            <div className="gap"></div>
                            <div className="set"></div>
                        </div>
                    </div>
                    <div id="nav">
                        <ul className="nav_left" onselectstart="return false;">
                            <li><i></i>下载</li>
                            <li><i></i>分享</li>
                            <li id="remove"><i></i>移动到</li>
                            <li id="rename"><i></i>重命名</li>
                            <li id="del"><i></i>删除</li>
                            <li id="create"><i></i>新建文件夹</li>
                            <li><i></i></li>
                        </ul>
                        <div className="nav_right">
                            <div className="show_mode"></div>
                            <div className="sort_mode">
                                <i></i>
                                <div className="cover"></div>
                                <ul>
                                    <li>按时间排列</li>
                                    <li>按字母排列</li>
                                    <li>显示缩略图</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
 
export default MyHeader;