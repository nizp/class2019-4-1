import React,{Component} from 'react';
import './head.css';
class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'',
            arr:[]
        }
    }

    change = (ev) => {
        let {value} = ev.target;
        this.setState({val:value});
    }

    keyUp = (ev) => {
        // let {arr} = this.state;
        
        if(ev.keyCode === 13){
            let {add} = this.props;
            let {txt:{value}} = this.refs;
            // let {value} = txt;
            //保证用户输入了内容
            if(value.trim()){
                // let ary = arr.concat();
                // ary.push(value);

                //调用父级的add方法
                add(value);

                this.setState({val:'' },()=>{
                    // console.log(this.state.arr);
                });
            }else{
                alert('你瞎啊?');
            }
        }

    }

    render() { 
        let {val} = this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    ref="txt"
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={val}
                    onChange={this.change}
                    onKeyUp = {this.keyUp}
                />
            </header>
        );
    }
}
 
export default MyHeader;