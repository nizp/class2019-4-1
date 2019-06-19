import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// let App = React.createElement('div',{className:'active'},'haha');

//<div className="active">haha2</div>

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'给赞'
        };
    }
    render(){
        return (
            <div>
                <h3>父级</h3>
                <hr />
                {/* <Div aaa="haha" index="5" val={this.state.val}/> */}
                <Div {...{
                    aaa:'哈哈',
                    index:5,
                    val:this.state.val
                }}/>
            </div>
        )
    }
} 
class Div extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {val} = this.props;
        return (
            <div>{val}</div>
        );
    }
}
 


// function Div(props){
//     console.log(props);
//     let {aaa} = props;
//     return (<div>{aaa}</div>)
// }

// function App() {
//     console.log(this);
//     return (<div>呵呵哒</div>)
// }
ReactDOM.render(<App />,document.getElementById('root'));