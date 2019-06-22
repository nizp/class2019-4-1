import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



if(module.hot){
    module.hot.accept();
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
                {/* 公共页面 */}
                {/* <Link to="/home" >
                    <button>首页</button>
                </Link> */}
                 <Link to="/" >
                    <button>首页</button>
                </Link>
                <Link to={{
                    pathname:'/about',
                    hash:'#page=1',
                    search:'?num=1',
                    state:{
                        nn:5
                    }
                }}>
                    <button>关于</button>
                </Link>
                {/* <Link to="/list/aa">
                    <button>列表</button>
                </Link> */}
                <Link to="/list/aa">
                    <button>列表1</button>
                </Link>
                <Link to="/list/bb">
                    <button>列表2</button>
                </Link>

                {/* <Route path="/home" component={Home}/> */}
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/list" component={About}/>

                {/* <Route strict path="/list/" component={DD}/> */}
                 <Route strict path="/list" render={({location:{pathname}})=>{
                     switch (pathname) {
                         case '/list/aa':
                            return <ListA />
                           
                         case '/list/bb':
                            return <ListB />
                         default :
                            return <List />
                     }
                }}/>
            </div>
        );
    }
}

let DD = ()=>{
    return (<div>List</div>)
}

function Home(props){
    // console.log(props);
    return (<div>Home</div>)
}

function About(props){
    // console.log(props);
    return (<div>About</div>)
}

function List(){
    return (<div>
        <h1>List</h1>
        {/* <Link to="/">返回首页</Link> */}
    </div>)
}


function ListA(){
    return (<div>
        <h1>ListA</h1>
    </div>)
}

function ListB(){
    return (<div>
        <h1>ListB</h1>
    </div>)
}




ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
document.getElementById('root'));