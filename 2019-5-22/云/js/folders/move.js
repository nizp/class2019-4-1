//调音师
const modalTree = document.querySelector('.modal-tree');
const content = modalTree.querySelector('.content');
const ok = modalTree.querySelector('.ok');
const cancel = modalTree.querySelector('.cancel');

let id = 0; //为了记录移动的id
let o = false; //判断是否为非法操作
remove.onclick = function(){
    let ary = getChild(globalId);
    let arr = ary.filter(item=>item.checked);
    let len = arr.length;
    if(len < 1){
        fullbox('请选择要移动的文件');
        return ;
    }

    modalTree.style.display = 'block';
    content.innerHTML = renderTree(0);

    //点击移动到的树形菜单中
    content.onclick = function(ev){
        if(ev.target.tagName === 'SPAN'){
            o = false;//重新设置一次false
            let li = ev.target.parentNode.parentNode;

            let span = content.getElementsByTagName('span');

            //把所有的span的背景色清掉
            for(let i=0;i<span.length;i++){
                span[i].style.background = '';
            }
            //把当前的背景色加上
            ev.target.style.background = '#ccc';

            id = li.dataset.id*1;  //获取到移动到的id
            if(id){
                //移动到的id有没有和选中的id重名
                if(arr.some(e=>e.id === id)){
                    fullbox('非法选择');
                    o = true;
                    return;
                }
                //生成ul
                if(!li.children[0].classList.contains('tree-ico-none')){
                    let o = !li.children[0].classList.toggle('close')
                    renderChild(li,id,o);
                }
            }
        }
    }


}

//点击确定
ok.onclick = function(){
    //刚才点击移动到的span时，是否有非法操作
    if(o){
        fullbox('非法选择');
        return;
    };
    //id 为点击的
    let ary = getChild(globalId);
    let arr = ary.filter(item=>item.checked);
    let len = arr.length;
    let onoff = false;
    if(len < 1 )return;

    /*
        循环所有的框选的数据，判断当前这层的id是否等于
        移动到的id，如果等于就说明是非法操作
    */
    // for(let i=0;i<arr.length;i++){
    //     let ary = getChild(arr[i].id);
    //     ary.push(data[arr[i].id]);
    //     ary.forEach(ele=>{
    //         if(ele.id === id){
    //             onoff = true;
    //             return;
    //         }
    //     });
    // }

    if(onoff){
        //移动不合法
        // console.log('不行');
        fullbox('非法操作,已报110');
    }else{
        //开始移动
        // console.log('行')
        arr.forEach(ele=>{
            ele.pid = id; 
            ele.checked = false;
        });
        render(globalId);
        renderTree(0);
    }
    modalTree.style.display = 'none';
}

cancel.onclick = function(){
    modalTree.style.display = 'none';
}