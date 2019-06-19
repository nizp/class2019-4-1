import React,{Component} from 'react';
import './head.css';
class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value="" 
                    onChange={()=>{}}
                />
            </header>
        );
    }
}
 
export default MyHeader;