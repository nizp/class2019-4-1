import React, { Component } from 'react'
class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:'#/all'
        }
    }
    componentDidMount() {
        window.location.hash = this.state.checked;
    }
    

    click = (checked) => {
        this.setState({checked});
        this.props.changeS(checked);
    }

    render() { 
        let {num} = this.props;
        let {checked} = this.state;
        return (
            <footer className="footer">
               <span className="todo-count">
                    <strong>{num}</strong>
                    <span>条未选中</span>
                </span>
                <ul 
                    className="filters"
                   
                >
                    <li>
                        <a 
                            href="#/all" 
                            className={checked==='#/all'?"selected":''}
                            onClick={()=>{this.click('#/all')}}
                        >全部</a>
                    </li>
                    <li>
                        <a 
                            href="#/unchecked" 
                            className={checked==='#/unchecked'?"selected":''}
                            onClick={()=>{this.click('#/unchecked')}}
                        >未选中</a>
                    </li>
                    <li>
                        <a 
                            href="#/checked"
                            className={checked==='#/checked'?"selected":''}
                            onClick={()=>{this.click('#/checked')}}
                        >已选中</a>
                    </li>
                </ul>
            </footer>
        );
    }
}
 
export default MyFooter;
