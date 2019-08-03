import React,{Component} from './react';
import ReactDOM from './react-dom';

// let obj = {name:'小明'}

// let str = '我的名字叫{name}';

// ReactDOM.render(<div>hello</div>,document.getElementById('root'));

// let element = (
//     React.createElement("div", {
//         id: "box",
//         'data-index':"0",
//         style: {
//             height: '100px',
//             background: 'red',
//             fontSize:'12px'
//         }
//     }, "hello",React.createElement("p", null, "ppp"))
// )



// function App(props){
    // return React.createElement("div", {class: "box",style: {
    //     height: '100px',
    //     background: 'red',
    //     fontSize:'12px'
    // }},'haha',props.name)
// }

// ,React.createElement("p", {}, "ppp")

class App extends Component{
    render(){
        return (React.createElement("div", {class: "box",style: {
            height: '100px',
            background: 'red',
            fontSize:'12px'
        }},'haha',this.props.name))
    }
}


let element = (React.element(App,{name:'于海洋',age:18}))

ReactDOM.render(element,document.getElementById('root'));