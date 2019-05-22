
let {po,duang} = tools;
const kuang = document.querySelector('.kuang');
let checkedNum = 0;//计碰撞个数
fBox.onmousedown = function(ev){

    if(ev.target.classList.contains('file-item') || ev.target.parentNode.classList.contains('file-item')){
        return false;
    }

    //点击空白处的时候，把所有的文件夹checked状态清除
    let ary = getChild(globalId);
    ary.forEach(item=>item.checked=false);
    render(globalId);


    console.log(folders.scrollTop)

    let disX = ev.pageX - fBox.offsetLeft;
    let {top} = po(fBox);
    let disY = ev.pageY - top;//一会再解释
    // console.log(ev.pageY);

    kuang.style.display = 'block';
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';

    fBox.onmousemove = function(ev){
        checkedNum = 0;
        let w = Math.abs((ev.pageX - fBox.offsetLeft) - disX);
        let h = Math.abs((ev.pageY-top) - disY );
        kuang.style.width = w + 'px';
        kuang.style.height = h + 'px';

        let l = Math.min(disX,(ev.pageX - fBox.offsetLeft));
        let t = Math.min(disY,(ev.pageY-top));
        kuang.style.left = l + 'px';
        kuang.style.top = t + 'px';

        let fileItem = document.querySelectorAll('.file-item');

        fileItem.forEach((ele,i)=>{
             //当创建元素很多之后，会出现滚动条，所以加上了folders滚动条的高度
            if(duang(kuang,ele,folders.scrollTop)){
               data[ele.dataset.id].checked = true;
               checkedNum ++;
            }else{
                data[ele.dataset.id].checked = false;
            }
        });

        if(checkedNum === fileItem.length){
            // console.log('全选');
            checkedAll.className = 'checked';
        }else{
            // console.log('不全选');
            checkedAll.className = '';
        }

        render(globalId);
        // console.log('move');
        return false;
    }
    document.onmouseup = function(){
        kuang.style.display = 'none';
        kuang.style.width = kuang.style.height = 0;
        fBox.onmousemove = document.onmouseup = null;
    }
    // ev.returnValue = false;
    // return false;
}