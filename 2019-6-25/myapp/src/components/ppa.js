import React, { Component } from 'react'
import PaP from './pap';
import PaP2 from './pap2';
class PPa extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <p>子组件</p>
                <PaP/>
                {/* <PaP2/> */}
            </div>
        );
    }
}

export default PPa;