import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // console.log(this.props);
        //在this.props.children中可以获取到双标签中的内容。
        let {children} = this.props;
        return (
            <div>
                <p>父组件haha</p>
                {
                    children?children:<div>走默认</div>
                }
            </div>
        );
    }
}

function PPa (){
    return (<div>子组件</div>)
}
function PaP (){
    return (<div>子组件2</div>)
}

ReactDOM.render(
    <App>
        <PPa />
        <PaP />
    </App>
    ,
    document.getElementById('root')
)

