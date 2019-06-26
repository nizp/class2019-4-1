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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <section className="todoapp">
                <MyHeader />
                <Main />
                <MyFooter />
            </section>
        );
    }
}
 
export default App;
