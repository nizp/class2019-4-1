console.log(data);

 //创建一个装DOM节点的容器，html.appendChild(要插入的DOM节点)
 // let html = document.createDocumentFragment();


const  fempty = document.querySelector('.f-empty');

let globalId = 0; //存储id的

function render(id){
    globalId = id*1;
    folders.innerHTML = '';
    //如果有子级，就渲染
    let ary = getChild(globalId);
    // console.log(ary,globalId);
    if(ary && ary.length){
        fempty.style.display = 'none';
        // console.time('计时器');
        // let html = document.createDocumentFragment();
        // console.log(ary)
        checkedAll.className = ary.every(e=>e.checked)?'checked':'';
        ary.forEach((ele,i)=>{
           
            let div = document.createElement('div');
            div.className = ele.checked?'file-item active':'file-item';
            div.dataset.id = ele.id;
            let img = document.createElement('img');
            img.src = 'img/folder-b.png';
            img.ondblclick = function(){
                console.log(ary);
                //当前层级的数组
                let arr = getChild(ele.id);
                if(arr && arr.length){ //0是假的
                    render(ele.id);
                }else{
                    /*
                        如果没有当前数据下没有子数据，
                        那么把图片打开，清空之前(folders中的)内容

                        把最新的id传到全局，是为了继续新建文件夹的时候，能够进入
                        到文件夹里面。
                    */
                    fempty.style.display = 'block';
                    globalId = ele.id;
                    folders.innerHTML = '';
                    // console.log(ele.id);
                }

                //双击文件的时候清除全选
                checkedAll.className = '';
                //把上一层的数据checked状态设置为false。
                ary.forEach(item=>item.checked=false);
                renderBreadNav();
            }
            let span = document.createElement('span');
            
            span.className = 'folder-name';
            span.innerHTML = ele.title;
            span.contentEditable = true;
            let input = document.createElement('input');
            input.className = "editor";
            input.value = ele.title;
            let is = document.createElement('i');
            is.className = ele.checked?'checked':'';

            is.onclick = function(){
                data[ele.id].checked = this.classList.toggle('checked');
                // console.log(data[ele.id]);
                render(globalId);
            }

            div.append(img);
            div.append(span);
            div.append(input);
            div.append(is);
            folders.appendChild(div);
        });
    }else{
        console.log('jin');
        fempty.style.display = 'block';
        checkedAll.className = '';
    }
}

render(0);