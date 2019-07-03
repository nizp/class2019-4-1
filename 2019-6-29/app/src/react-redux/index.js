/*
    Provider
        <Provider store={store}>
            <App />
        </Provider>


    connect
        connect(mapstate,mapdispath)(App)

        function connect(){
            return function(){

            }
        }

        connect()()



    
    组件可以是单标签还可以是双标签

        在组件中再放组件的时候使用双标签
    
*/



import MyContext from './context';
import React, { Component } from 'react'
import {bindActionCreators} from 'redux';

class Provider extends Component {
    render() { 
        let {store} = this.props;
        // console.log(store.getState())
        return (
            <MyContext.Provider value={{store}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}


export function connect(mapstate,mapdispath){
    return function(Components){//传进来的组件
        return class extends Component {
            static contextType = MyContext
            constructor(props,context) {
                super(props);
                this.state = mapstate(context.store.getState())
                // console.log()
            }
            componentDidMount() {
                this.unsubscribe = this.context.store.subscribe(()=>{
                    this.setState(this.context.store.getState())
                })
            }
            
            componentWillUnmount(){
                this.unsubscribe();
            }
            
            
            dispatchFn = () =>{
                if(typeof mapdispath === 'object'){
                    return bindActionCreators(mapdispath,this.context.store.dispatch);
                }
                return this.context.store;
            }
            render() { 
                this.dispatchFn();
                return (
                    <Components {...this.state} {...this.dispatchFn()}/>
                );
            }
        }
    }
}
 
export default Provider;


