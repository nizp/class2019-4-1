import React, { Component } from 'react'
class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="tree-menu fix"  onselectstart="return false;">
                <ul>
                    <li>
                        <div className="tree-title tree-ico open">
                            <span><i></i>微云</span>
                        </div>
                        <ul>
                            <li>
                                <div className="tree-title tree-ico close">
                                    <span><i></i>我的文档</span>
                                </div>
                            </li>
                            <li>
                                <div className="tree-title tree-ico close">
                                    <span><i></i>我的音乐</span>
                                </div>
                            </li>
                            <li>
                                <div className="tree-title tree-ico-none ">
                                    <span><i></i>123</span>
                                </div>
                            </li>
                        </ul>
                    </li> 
                    {/* <!-- 以下 左tree 是展开 --> */}
                     <li>
                        <div className="tree-title tree-ico open">
                            <span><i></i>微云</span>
                        </div>
                        <ul>
                            <li>
                                <div className="tree-title tree-ico open">
                                    <span><i></i>我的文档</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className="tree-title tree-ico-none">
                                            <span><i></i>js程序设计</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tree-title tree-ico-none">
                                            <span><i></i>js权威指南</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="tree-title tree-ico open">
                                    <span><i></i>我的音乐</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className="tree-title tree-ico open">
                                            <span><i></i>周杰伦</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="tree-title tree-ico-none">
                                                    <span><i></i>发如雪</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tree-title tree-ico-none">
                                                    <span><i></i>夜曲</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tree-title tree-ico-none">
                                                    <span><i></i>稻香</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="tree-title tree-ico">
                                            <span><i></i>王杰</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tree-title tree-ico">
                                            <span><i></i>张国荣</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="tree-title tree-ico-none ">
                                    <span><i></i>123</span>
                                </div>
                            </li>
                        </ul>
                    </li> 
            </ul>
            </div>
        );
    }
}
 
export default Tree;