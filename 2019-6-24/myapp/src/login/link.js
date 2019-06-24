import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom';
class PPa extends Component {
    render() { 
        return (
            <>
                <Link to="/public">
                    <button>公有</button>
                </Link>
                <Link to="/private">
                    <button>私有</button>
                </Link>
                <hr />
            </>
        );
    }
}
 
export default PPa;


