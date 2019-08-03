let React = {
    createElement,
    element
}

//标签、内容变化对比
//type 是什么标签 | 函数 | 组件
/*
    type    children 来进行渲染
    要把type和children独立出来传给react-dom

    创建一个虚拟的DOM对象
*/
//标签的类型，标签的属性，子级
function createElement(type,attrs,...children){
    let props = {}; //feature  描述元素的特征

    //把元素身上的属性赋值到虚拟DOM属性上去  <div onClick={this.click} class="" index="0"  id="" data-num="1"> 
    for(let key in attrs){
        props[key] = attrs[key]
    }

    // let childrenLen = arguments.length - 2; //拿到所有元素下的子级

    // let childrenLen = children.length;

    // if(childrenLen === 1){
    //     props.children = children;
    // }else if(childrenLen > 1){
    //     //要拿到后面多个children
    //     //['div',{},'hello','<p>']
    //     props.children = Array.from(arguments).slice(2);
    // }
    // console.log(props);
    props.children = children;
    
    // console.log(element(type,props))
    return element(type,props);
}

function element(type,props){
    return {type,props}
}

export default React;

