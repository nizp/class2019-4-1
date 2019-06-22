import React, { Component } from 'react'

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['于海洋历险记','于海洋一夜情']
        }
    }
    render() { 
        return (
            <ul>
                {
                    this.state.list.map((item,i)=>{
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        );
    }
}
 
export default Page2;