import React, { Component } from 'react';

import MyHeader from './components/head/header';
import Main from './components/list';
import MyFooter from './components/footer';
import './css/index.css';
/*
    增:输入内容回车添加数据
    删:点击X就删除
    改:双击内容修改
    查:全选中、未选中、已选中
*/
function getStore(key){
    let json = localStorage.getItem(key);
    
    return json?JSON.parse(json):[
        {
            id:0,
            txt:'好好好',
            checked:true
        },
        {
            id:1,
            txt:'好',
            checked:false
        },
        {
            id:2,
            txt:'好11123',
            checked:false
        }
    ]
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            arr:getStore('list'),
            search:'#/all'
        }
    }


    changeS = (search) => {
        this.setState({search});
    }

    //添加方法
    add = (val) => {
        let arr = this.state.arr.concat();
        let obj = {
            txt:val,
            id:Date.now(),
            checked:false
        };

        arr.unshift(obj);
        this.setState({arr},()=>{
            // console.log(this.state.arr);
        });
    }

    setDate = () => {
        localStorage.setItem('list',JSON.stringify(this.state.arr))
    }

    //切换checked项
    changeChecked = (id) => {
        let {arr} = this.state;
        let obj = arr.find(item=>item.id === id);
        if(obj){   
            obj.checked = !obj.checked;
            this.setState({arr});
        }
    }

    //全选
    checkedAll = (boolean) => {
        let {arr} = this.state;
        arr.forEach(item=>item.checked = boolean);
        this.setState({arr});
    }

    rm = (id) => {
        let {arr} = this.state;
        let index = arr.findIndex(item=>item.id === id);
        if(index !== -1){   
            arr.splice(index,1);
            this.setState({arr});
        }
    }

    //修改
    changeText = (id,txt) => {
        let {arr} = this.state;
        let obj = arr.find(item=>item.id === id);
        if(obj){   
            obj.txt = txt;
            this.setState({arr});
        }
    }

    render() { 
        let {arr,search} = this.state;
        //种storage的
        this.setDate();
        let list = null;

        //通过search值来过滤对应的数组
        if(arr.length){
            list = arr.filter(item=>{
                switch (search) {
                    case '#/all': 
                        return item;
                    case '#/unchecked':
                        return item.checked === false;
                        
                    case '#/checked':
                        return item.checked === true;
                    default:
                        return item;
                }
            });    
        }

        return (
            <section className="todoapp">
                <MyHeader 
                    add = {this.add}
                />
                <Main 
                    // data = {arr}
                    // changeChecked={this.changeChecked}
                    // checkedAll = {this.checkedAll}
                    // rm = {this.rm}
                    {...{
                        data:list,
                        changeChecked:this.changeChecked,
                        checkedAll:this.checkedAll,
                        rm:this.rm,
                        changeText:this.changeText
                    }}
                />
                <MyFooter
                    num={arr.filter(item=>!item.checked).length}
                    changeS = {this.changeS}
                />
            </section>
        );
    }
}
 
export default App;
