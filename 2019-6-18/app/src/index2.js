import React from 'react';
import ReactDOM from 'react-dom';
if(module.hot){
    module.hot.accept();
}

// let list = [1,2,3,4];

// document.onclick = function(){
//     list.push(5);
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[1,2,3,4]
        };
    }

    //自定义方法
    myclick(){
       let arr = this.state.list.concat();
       arr.push(5);
       this.setState({list:arr});
    }

    //组件必须方法
    render(){
        return (
            <div>
                <div>hehe哈</div>
                {/* <PPa /> */}
                <button 
                    // onMouseOver={()=>{
                    //     // this.state.list.push(5);
                    //     // console.log(this.state.list)
                    //     let arr = this.state.list.concat();
                    //     arr.push(5);
                    //     this.setState({list:arr});
                    // }}
                    onClick = {this.myclick.bind(this)}
                >点击生成</button>
                {
                    this.state.list.map((item,i)=><p key={i}>{item}</p>)
                }
            </div>
        )
    }
}

class PPa extends React.Component {
    render(){
        return (
            <div>
                <div>pp1</div>
            </div>
        )
    }
}


// function App(){
//     return (
//         <div>
//             <div>别的上面东西</div>
//         </div>
//     )
// }

ReactDOM.render(<App />,document.getElementById('root'));
