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
            list:['于海洋和阿梅吃饭','于海洋和你真胖唱歌']
        }
    }
    render() { 
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,i)=>{
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                <hr />
                <NavLink to="/page3/p1">
                    <button>你八卦</button>
                </NavLink>
                <NavLink to="/page3/p2">
                    <button>他八卦</button>
                </NavLink>
            </div>
        );
    }
}
 
export default Page3;