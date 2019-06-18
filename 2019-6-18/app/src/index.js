import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import List from './components/list';

if(module.hot){
    module.hot.accept();
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2]
        };
    }
    

    render(){
        let {arr} = this.state;
        let list = arr.map((item,i)=>{
            return (
                // <List 
                //     text={item} 
                //     key={i} 
                //     a={1} 
                //     b={10} 
                //     c={20}
                // />
                <List 
                    {...{
                        text:item ,
                        key:i,
                        b:10, 
                        c:20,
                        d:30
                    }}
                />
            )
        });
        
        return(
            <ul>
                {/* <List data={this.state.arr}/> */}
                {list}
            </ul>
        )
    }
}



ReactDOM.render(<App />,document.getElementById('root'));