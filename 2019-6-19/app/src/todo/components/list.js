import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section className="main">
                <input 
                    className="toggle-all" 
                    type="checkbox" 
                    onChange={()=>{}}
                />
                <ul className="todo-list">
                    <li className="completed">
                        <div className="view">
                            <input 
                                className="toggle" 
                                type="checkbox" 
                                onChange={()=>{}}
                            />
                            <label>多多对对对</label>
                            <button className="destroy"></button>
                        </div>
                        <input 
                            className="edit" 
                            value="多多对对对" 
                            onChange={()=>{}}
                        /> 
                    </li>
                </ul>
            </section>
        );
    }
}
 
export default Main;
