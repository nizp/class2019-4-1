import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['于海洋和阿梅吃饭','于海洋和你真胖唱歌'],
            list2:['于海洋和王权士约会','郭玥和刘泉手拉手']
        }
    }

    click = () => {
        console.log(this.props)
        let {history:{push}} = this.props;
        push('/page2');

    }

    render() { 
        // console.log(this.props.location);
        let {location:{pathname}} = this.props;
        let list = null;
        switch (pathname) {
            case '/page3/p1':
                    list = this.state.list
                break;
            case '/page3/p2':
                    list = this.state.list2
                break;
        
            default:
                    list = this.state.list
                break;
        }


        return (
            <div>
                <ul>
                    {
                        list.map((item,i)=>{
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={this.click}>
                    返回首页
                </button>
                {/* <Link to="/">
                    <button>
                        返回首页
                    </button>
                </Link> */}
            </div>
        );
    }
}
 
export default Page3;