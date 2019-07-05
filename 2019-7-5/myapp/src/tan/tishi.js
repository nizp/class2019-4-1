import React, { Component } from 'react'
class Tishi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="full-tip-box">
                <span className="full-tip">
                    <span className="inner">
                        {/* <!-- <i className="ico"></!--> --> */}
                        <span className="tip-text">新建文件夹成功</span>
                    </span>
                </span>
            </div>
        );
    }
}
 
export default Tishi;