checkedAll.onclick = function(){
    let bool = checkedAll.classList.toggle('checked');
    let ary = getChild(globalId);
    ary.forEach(item=>{
        item.checked = bool?true:false;
    });
    render(globalId);
}