import React,{Component} from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
    module.hot.accept();
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num:0,
            arr:[1,2,3,4]
        }
    }

    add = () => {

        let {arr} = this.state;
        for(let i=0;i<arr.length;i++){
            console.log(i);
        }

        console.log('123');

        // let {num} = this.state;
        // num ++;
        // console.log(this.state.num);
        // this.setState({num});
        // this.setState({num:5});
        // this.setState({num:6},()=>{
        //     console.log(this.state.num);
        // }); //上面几个state会合并成一个


        // this.setState((prev)=>{
        //     return {num:prev.num + 1}
        // //    console.log()
        // });

        // setTimeout(() => {
        //     this.setState({num:1});
        //     console.log(this.state.num);
        // }, 0);


        // console.log(this.state.num);
    }

    componentDidMount(){
       let btn = document.querySelector('button');
    //    console.dir(btn);
        let that = this;
        btn.onclick = function(){
            that.setState({num:2});
            console.log(that.state.num);
        }
    }

    render() { 
        
        console.log('看看');
        return (  
            <div>
                <button
                    onClick={this.add}
                >{this.state.num}</button>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
 

