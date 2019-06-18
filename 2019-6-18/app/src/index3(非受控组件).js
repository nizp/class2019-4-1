import React,{Component} from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
    module.hot.accept();
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1111,2222,333]
        };

        // this.keyup = this.keyup.bind(this);
    }

    keyup = (ev) => {
        if(ev.keyCode === 13){
            let {value} = ev.target;
            let arr = this.state.arr.concat();
            arr.unshift(value);
            this.setState({arr});
            ev.target.value = '';
        }   
    }

    render(){
        //逻辑
        let {arr} = this.state;
        let list = null;
        if(arr.length){
            list = arr.map((item,i)=>{
                return (<li key={i}>{item}</li>);
            })
        }

        //结构
        return (
            <div>
                <input 
                    type="text"
                    onKeyUp={this.keyup}
                />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}



ReactDOM.render(<App />,document.getElementById('root'));