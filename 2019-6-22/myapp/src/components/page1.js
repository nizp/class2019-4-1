import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['于海洋大战你真胖','华为怒斩于海洋']
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
 
export default Index;