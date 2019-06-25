import React, { Component } from 'react';
import MyContext from '../index';
// const {Consumer} = MyContext;
class PaP2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>1</div>
            // <Consumer>
            //   {
            //     ({num,changeNum})=>{
            //         // console.log(val)
            //         return(
            //             <div>
            //                 <button onClick={changeNum}>点击</button>
            //                 <div>孙子2组件{num}</div>
            //             </div>
            //         )
            //     }
            //   }
            // </Consumer>
        );
    }
}

export default PaP2;