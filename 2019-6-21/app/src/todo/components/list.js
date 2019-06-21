import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:{
                id:null,
                b:false
            }
        }
    }

    //勾选不选
    change = (id) => {
        //调用父级的修改checked值的方法
        let {changeChecked} = this.props;
        changeChecked(id);
    }

    //全选
    all = (ev) => {
        let {checkedAll} = this.props;
        checkedAll(ev.target.checked);
    }

    delete = (id) => {
        let {rm} = this.props;
        rm(id);
    }

    //双击操作修改框
    replace = (id,val) => {
        /*
            通过数据的id去设置了一个ref值
            ref={'num'+item.id}
        */
        //当双击的时候，把数据的内容给对应的input
        this.refs['num'+id].value = val;

        this.setState({
            editing:{
                id,
                b:true
            }
        },()=>{
            // console.log(this.state.editing);
            this.refs['num'+id].select();
            // this.refs['num'+id].focus();
        })

        // console.log(1);
        // let {replaceFn} = this.props;
        // replaceFn(id);
    }

    //失焦的时候修改内容
    blur = (ev) => {
        let {changeText} = this.props;
        let {value} = ev.target;

        changeText(this.state.editing.id,value);

        this.setState({
            editing:{
                id:null,
                b:false
            }
        });

    }

    //按esc键，就取消修改
    esc = (ev) => {
        if(ev.keyCode === 27){
            this.setState({
                editing:{
                    id:null,
                    b:false
                }
            });
        }
    }

    render() { 
        let {data} = this.props;
        let {editing} = this.state;
        let list = null;
        let all = false;
        if(data.length){
            list = data.map(item=>{
                let sClass = item.checked?'completed':'';
                //如果数据的id是双击的id，就让数据对应的li添加一个editing类名
                if(editing.id === item.id){
                    sClass += ' editing';
                    //'completed editing' || 'editing'
                }
                
                return (
                    <li className={sClass} key={item.id}>
                        <div className="view">
                            <input 
                                className="toggle" 
                                type="checkbox" 
                                onChange={()=>{this.change(item.id)}}
                                checked={item.checked}
                            />
                            <label 
                                onDoubleClick={()=>{this.replace(item.id,item.txt)}}
                            >{item.txt}</label>
                            <button 
                                className="destroy"
                                onClick = {()=>{this.delete(item.id)}}
                            ></button>
                        </div>
                        <input 
                            ref={'num'+item.id}
                            className="edit" 
                            onChange={()=>{}}
                            onBlur = {this.blur} 
                            onKeyUp={this.esc}
                        /> 
                    </li>
                )
            });
            all = data.every(item=>item.checked);
        }
        console.log(data);
        return (
            <section className="main">
                <input 
                    className="toggle-all" 
                    type="checkbox" 
                    checked={all}
                    onChange={this.all}
                />
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        );
    }
}
 
export default Main;
