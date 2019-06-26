import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../store3/action';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props);
        let {num,incrment,deincrment} = this.props;
        return (
            <div>
                <button onClick={deincrment}>-</button>
                <span>{num}</span>
                <button onClick={incrment}>+</button>
        
            </div>
        );
    }
}

function mapStateToProps(state){//state store的所有的数据
    //可以过滤当前组件可用的数据
    return {num:state.reducer1.num};
}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);

export default connect(mapStateToProps,actions)(App);