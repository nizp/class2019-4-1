import React, { Component } from 'react';
import * as actions from '../../store/action';
import {connect} from 'react-redux';
import {tools} from '../../tools/tools_2.0';
class Fbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            l:0,
            t:0,
            w:0,
            h:0,
            display:'none'
        }
        this.files = null;
    }

    
    componentDidMount() {
        let {fbox,k} = this.refs;
        let _that = this;
        let {duang} = tools;
        let {changetrue,changefalse} = this.props;
        const head = document.getElementById('head');
        const breadmenu = document.querySelector('.breadmenu');
        const treeMenu = document.querySelector('.tree-menu');
        const tw = treeMenu.offsetWidth;
        const tt = head.offsetHeight+breadmenu.offsetHeight;
      
        fbox.onmousedown = function(ev){
            //如果没有文件夹就不用选框了。
            if(!_that.files){return};
            let disX = ev.pageX;
            let disY = ev.pageY;
           
            // console.log(ev.target);
            let o = ev.target;

            if(o.classList.contains('file-item') || o.parentNode.classList.contains('file-item')){
                return;
            }

        
            _that.setState({
                display:'block',
                l:disX -tw,
                t:disY - tt
            });

           

            document.onmousemove = function(ev){
                // console.log('触发了')
                // duangArr.length = [];
                // console.log('按下'+(disX- tw),'移动的'+ev.pageX)
                // console.log('=====')
                // console.log(Math.min((disX- tw),ev.pageX-tw))
                _that.setState({
                    l:Math.min((disX- tw),ev.pageX-tw),
                    t:Math.min(disY - tt,ev.pageY - tt),
                    w:Math.abs(ev.pageX - disX),
                    h:Math.abs(ev.pageY - disY)
                });

                _that.files.forEach(ele=>{
                    if(duang(k,ele,fbox.children[0].scrollTop)){
                        // duangArr.push(ele.dataset.index);
                        // duangArr.forEach(j=>{
                        //     changetrue(j)
                        // })
                        /*
                            第一要碰到
                            第二碰到的元素要没有checked值
                        */
                        if(!ele.querySelector('i').classList.contains('checked')){
                            changetrue(ele.dataset.index);
                        }   
                        // changetrue(ele.dataset.index)
                        // console.log(duangArr)
                    }else{
                        if(ele.querySelector('i').classList.contains('checked')){
                            changefalse(ele.dataset.index);
                        }  
                    }
                });
                return false;
            }
            document.onmouseup = function(ev){
                _that.setState({
                    l:ev.pageX - disX,
                    t:ev.pageY - disY,
                    display:'none',
                    w:0,
                    h:0
                });
                document.onmousemove = document.onmouseup = null;
            }
            
        }
    }

    componentDidUpdate(){
        this.files = document.querySelectorAll('.file-item');
        if(this.refs.ntext){
            this.refs.ntext.select();
        }
        // console.log(this.refs.ntext);
    }
    

    render() { 
        //img/folder-b.png
        // console.log(1111)
        let {changePid,changeId,arr,add} = this.props; 
        let list = null;
        let {l,t,display,w,h} = this.state;
        if(arr.length){
            list = arr.map(item=>{
                let sClass = item.checked?'file-item active':'file-item';
                if(item.new){
                    //如果有新建文件夹
                    return (
                        <div 
                            className={sClass}
                            key={item.id}
                            data-index={item.id}
                        >
                            <img 
                                src={require('../../img/folder-b.png')} 
                                onDoubleClick={()=>{changePid(item.id)}} 
                                alt=""
                            />
                            <input 
                                style={{display:item.new?'block':'none'}}
                                type="text" 
                                className="editor"
                                defaultValue="新建文件夹"
                                ref="ntext"
                                onBlur={(ev)=>{add(ev.target.value)}}
                            />
                            <i 
                                className={item.checked?'checked':''}
                                onClick={()=>{changeId(item.id)}}
                            ></i>
                        </div>
                    ) 
                }else{
                    //没有新建文件夹
                    return (
                        <div 
                            className={sClass}
                            key={item.id}
                            data-index={item.id}
                        >
                            <img 
                                src={require('../../img/folder-b.png')} 
                                alt=""
                                onDoubleClick={()=>{changePid(item.id)}} 
                            />
                            <span 
                                className="folder-name"
                                style={{display:item.new?'none':'block'}}
                            >{item.title}</span>
                            <i 
                                className={item.checked?'checked':''}
                                onClick={()=>{changeId(item.id)}}
                            ></i>
                        </div>
                    )
                }
                // return (
                //     <div 
                //         className={sClass}
                //         key={item.id}
                //         data-index={item.id}
                //     >
                //         <img 
                //             src={require('../../img/folder-b.png')} 
                //             onDoubleClick={()=>{changePid(item.id)}} 
                //             alt=""
                //         />
                //             <span 
                //             className="folder-name"
                //             style={{display:item.new?'none':'block'}}
                //         >{item.title}</span>
                //         <input 
                //             style={{display:item.new?'block':'none'}}
                //             type="text" 
                //             className="editor"
                //             defaultValue="新建文件夹"
                //             ref="ntext"
                //         />
                //         <i 
                //             className={item.checked?'checked':''}
                //             onClick={()=>{changeId(item.id)}}
                //         ></i>
                //     </div>
                // )
            })
        }
        
        return (  
            <div id="fBox"  ref="fbox">
                <div className="folders">
                    {/* <!-- 这个是操作的东西 --> */}
                    {list}
                </div>
                <div 
                    className="kuang" 
                    ref="k"
                    style={{left:l,top:t,display,width:w,height:h}}
                ></div>
            </div>
        );
    }
}
 
export default connect(state=>state.reducer_yun,actions)(Fbox);