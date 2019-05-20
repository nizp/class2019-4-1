
let {po,duang} = tools;
const kuang = document.querySelector('.kuang');
let checkedNum = 0;//计碰撞个数
fBox.onmousedown = function(ev){

    if(ev.target.classList.contains('file-item') || ev.target.parentNode.classList.contains('file-item')){
        return false;
    }


    let disX = ev.pageX - fBox.offsetLeft;
    let {top} = po(fBox);
    let disY = ev.pageY - top; //+ floders.scrollTop;//一会再解释
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
            if(duang(kuang,ele)){
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
       

    }
    fBox.onmouseup = function(){
        kuang.style.display = 'none';
        kuang.style.width = kuang.style.height = 0;
        fBox.onmousemove = fBox.onmouseup = null;
    }
    // ev.returnValue = false;
    return false;
}