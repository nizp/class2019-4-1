let {getParents,getParent} = tools;


//生成面包屑
function renderBreadNav(){
    let html = '';
    //面包屑数组
    let ary = getParents(globalId);

    ary.forEach((item,i,all)=>{
        if(i != all.length-1){
            //用自定义的方式去存储每个标签的对应的id
            html += `<a data-id="${item.id}" href="javascript:;">${item.title}</a>`;
        }else{
            html += `<span>${item.title}</span>`;
        }
    });

    breadNav.innerHTML = html;
}

//点击面包屑的时候，把对应的id获取出来,赋值globalId
breadNav.onclick = function(ev){
    if(ev.target.tagName === 'A'){
        //console.log(globalId);
        let ary = getChild(globalId);
        ary.forEach(item=>item.checked = false);
        render(ev.target.getAttribute('data-id'));
        renderBreadNav();
        //只要点击了面包屑就把checked值清除。
        checkedAll.className = '';
    }
}



renderBreadNav();

// console.log();

// console.log(getParents(4));




