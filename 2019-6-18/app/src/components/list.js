import React,{Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // console.log(this.props.text);
        let {a,b,c} = this.props;
        console.log(a,b,c);
        return (
            <li>{this.props.text}</li>
        );
    }
}
 
export default List;