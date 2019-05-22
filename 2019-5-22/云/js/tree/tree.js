const treeMenu = document.querySelector('.tree-menu');
renderTree(0);
//初始化
function renderTree(num){
    let html = `<ul>
        <li data-id="${data[num].id}">
            <div class="tree-title tree-ico open">
                <span><i></i>${data[num].title}</span>
            </div>
        </li>
    `;
    let ary = getChild(num);
    if(ary.length){
        html += `
            <ul style="padding-left:15px">
                ${
                    ary.map(ele=>{
                        let sclass = getChild(ele.id).length?'tree-title tree-ico close':'tree-title tree-ico-none';
                        return (
                            `<li data-id="${ele.id}">
                                <div class="${sclass}">
                                    <span><i></i>${ele.title}</span>
                                </div>
                            </li>`
                        )
                    }).join('') 
                }
            </ul>
        `
    }
    html += `</ul>`;
    treeMenu.innerHTML = html;
    return html;
}


treeMenu.onclick = function(ev){
    if(ev.target.tagName === 'SPAN'){
        let li = ev.target.parentNode.parentNode;
        let id = li.dataset.id*1;
        if(id){
            globalId = id;
            renderBreadNav();
            render(id);
            if(!li.children[0].classList.contains('tree-ico-none')){
                let o = !li.children[0].classList.toggle('close')
                renderChild(li,id,o);
            }
           
            // console.log(1);
        }
    }
}


//点击创建子级ul的
function renderChild(li,num,onoff){
    //判断文件夹是否关闭
    if(onoff){
        li.children[0].classList.add('open');
        li.children[0].classList.remove('close');
    }else{
        li.children[0].classList.add('close');
        li.children[0].classList.remove('open');
    }

    /*
        有没有ul，有就不添加，没有才添加
    */
    if(li.lastElementChild.tagName !== 'UL'){
        let ary = getChild(num);
        let html = '<ul style="padding-left:5px">';
        // console.log(ary,num)
        if(ary.length && onoff){
            html += `
                ${
                    ary.map(ele=>{
                        let sclass = getChild(ele.id).length?'tree-title tree-ico close':'tree-title tree-ico-none';
                        return (
                            `<li data-id="${ele.id}">
                                <div class="${sclass}">
                                    <span><i></i>${ele.title}</span>
                                </div>
                            </li>`
                        )
                    }).join('') 
                }
            </ul>
        `
        }
        html += `</ul>`;
        li.innerHTML += html;
    }else{
        let uls = li.getElementsByTagName('ul');
        /*
            打开的时候只有li下的第一个ul打开

            关闭的时候把li下的所有ul都关闭
        */
        if(onoff){
            li.children[1].style.display = 'block';
        }else{
            for(let i=0;i<uls.length;i++){
                uls[i].style.display = 'none';
                uls[i].previousElementSibling.className = 'tree-title tree-ico close';
            }
        }
    }
}





