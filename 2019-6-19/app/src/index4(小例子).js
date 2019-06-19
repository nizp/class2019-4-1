import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {
                    checked:true,
                    id:0,
                    txt:'你好'
                },
                {
                    checked:false,
                    id:1,
                    txt:'好'
                },
                {
                    checked:false,
                    id:2,
                    txt:'地震'
                },
                {
                    checked:false,
                    id:3,
                    txt:'龙卷风'
                }
            ]
        }
    }

    //点击全选
    changeAll = (ev) => {
        let {arr} = this.state;
        //拿到当前元素的checked值
        let {checked} = ev.target;
        console.log(checked);
        //去循环所有的数据，所有的数据都跟checked值走
        arr.forEach(item=>{
            item.checked = checked;
        });
        //更新数据
        this.setState({arr});
    }

    parentChange = (id) => {
        let {arr} = this.state;
        //找到数组中有没有和传进来的id一样对象
        let oo = arr.find(ele=>ele.id === id);
        //如果有就改变checked值
        if(oo){
            oo.checked = !oo.checked;
            //更新数据
            this.setState({arr});
        }
    }

    render() { 
        let {arr} = this.state;
        let list = null;
        let all = false;
        let nn = 0;
        if(arr.length){
            /*
                key:尽量用数据传给你的id值
                key值只是比较兄弟之间的，作用于兄弟元素，不覆盖全局
            */
            list = arr.map((item,i)=>{
                return <List {...{
                    key:item.id,
                    txt:item.txt,
                    checked:item.checked,
                    pChange:this.parentChange,
                    id:item.id
                }}/>
            })

            all = arr.every(item=>item.checked);//数据每次发生变化的时候都去看看是否所有的checked值都为true
            //过滤没有选中的个数
            nn = arr.filter(item=>!item.checked).length;
        }
        return ( 
            <div>
                全选:<input 
                    type="checkbox"
                    onChange={this.changeAll}
                    checked={all}
                />
                <ul>
                   {list}
                </ul>
                <p>有{nn}个未选中</p>
            </div>
        );
    }
}


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //点击子级的checkbox的时候把id传给父级，父级就能通过id去改变父级的数据
    change = () => {
        // pChange()
        let {pChange,id} = this.props;
        pChange(id);
        // console.log(this.props);
    }
    render() { 
        let {txt,checked} = this.props;
        return ( 
            <li>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={this.change}
                />
                <span>{txt}</span>
            </li>
        );
    }
}
 
 

ReactDOM.render(<App />,document.getElementById('root'));