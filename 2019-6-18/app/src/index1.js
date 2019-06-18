import React from 'react';
import ReactDOM from 'react-dom';
import './css/1.css';
//为了保存不闪
if(module.hot){
    module.hot.accept();
}

//不用jsx的语法
// const H1 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
//   );

// 用jsx的语法
//<h1 className="greeting">Hello, world</h1>


//[1,2,3] -> 1 2 3
//参数不要写分号

// let arr = [1,2,3];
// let ps = arr.map((e,i)=><p key={i}>{e}</p>)
ReactDOM.render(
    <div>
        {/*<div>你好</div>*/
            // console.log(1)
            // [1,2,3,4]
            // console.log(arr)
            // arr.map((e,i)=><p key={i}>{e}</p>)
        }
        <div className="active">haha</div>
        {/* <input type="text" value="123"/> */}
        {/* <input type="checkbox" checked/> */}
        <input type="checkbox" defaultChecked/>
        <input type="text" defaultValue="123"/>
    </div>,
    // H1,
    document.getElementById('root'),
    // () => {
    //     console.log('渲染成功')
    // }
);