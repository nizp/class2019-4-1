const treeMenu = document.querySelector('.tree-menu');
renderTree(0);
function renderTree(num){
    let html = `<ul>
        <li>
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
}


treeMenu.onclick = function(ev){
    if(ev.target.tagName === 'SPAN'){
        let li = ev.target.parentNode.parentNode;
        let id = li.dataset.id*1;
        renderChild(li,id,!li.children[0].classList.toggle('close'));
        // console.log(1);
    }
}

function renderChild(li,num,onoff){
    let ary = getChild(num);
    let html = '<ul>';
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

    // console.log(html);

    // let li = treeMenu.querySelector(`li[data-id="${num}"]`);
    if(onoff){
        li.children[0].classList.add('open');
        li.children[0].classList.remove('close');
        li.innerHTML += html;
    }else{
        li.children[0].classList.add('close');
        li.children[0].classList.remove('open');
        let ul = li.lastElementChild;
        if(ul.tagName === 'UL'){
            ul.remove();
        }
    }
}





