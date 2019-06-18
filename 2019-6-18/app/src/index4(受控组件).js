import React,{Component} from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
    module.hot.accept();
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'哈哈哈',
            arr:[1,2]
        };
    }
    change = (ev) => {
        //每次在我输入的时候，改变val这个数据，就能让输入框变化
        let {value} = ev.target;
        this.setState({val:value});
        // console.log(value);
    }

    keyup = (ev) => {
        if(ev.keyCode === 13){
            let {arr} = this.state;
            let ary = arr.concat();
            let {value} = ev.target;
            ary.push(value);
            this.setState({arr:ary,val:''});
        }
    }

    render(){
        let {arr,val} = this.state;
        let list = null;
        if(arr.length){
            list = arr.map((item,i)=><li key={i}>{item}</li>)
        }
        return (
            <div>
                <input  
                    type="text"
                    value={val}
                    onChange = {this.change}
                    onKeyUp = {this.keyup}
                />
                <ul>
                   {list}
                </ul>
            </div>
        )
    }
}



ReactDOM.render(<App />,document.getElementById('root'));