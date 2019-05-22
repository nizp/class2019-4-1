del.onclick = function(){
    let ary = getChild(globalId);
   
    let a = document.querySelectorAll('.conf-btn a');
    let x = document.querySelector('.close-ico');

    let len = ary.filter(ele=>ele.checked).length;

    if(len > 0){
        tanbox.style.display = 'block';
    }else{
        fullbox('请选择删除文件');
    }

    // console.log(ary,len);
    a[0].onclick = function(){
        ary.forEach(item=>{
            if(item.checked){
                delete data[item.id];
            }
        });
        render(globalId);
        renderTree(0);
        tanbox.style.display = 'none';
    }
    a[1].onclick = x.onclick = function(){
        tanbox.style.display = 'none';
    }
}