console.log(data);

//循环所有的数据，把每个数据的pid和你传进来的pid对比，如果一致，说明
//就放到一个数组中，这个数组就是同级的了
function getChild(pid){
    //判断一下是否有这个pid，如果整个对象下都没有这个数据
    //返回null
   if(!data[pid])return null;
   let arr = [];
   for(let attr in data){
       if(data[attr].pid === pid){
            arr.push(data[attr]);
       }
   }
   return arr;
}


const folders = document.querySelector('.folders');
// 2.776123046875ms
//3.7490234375ms
//8.909912109375ms
//5

 //创建一个装DOM节点的容器，html.appendChild(要插入的DOM节点)
 // let html = document.createDocumentFragment();

function render(id){
    folders.innerHTML = '';
    //如果有子级，就渲染
    let ary = getChild(id);
    if(ary){
        console.time('计时器');
        // let html = document.createDocumentFragment();
        ary.forEach((ele,i)=>{
            let div = document.createElement('div');
            div.className = 'file-item';
            let img = document.createElement('img');
            img.src = 'img/folder-b.png';
            img.ondblclick = function(){
                render(ele.id);
            }
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = ele.title;
            let input = document.createElement('input');
            input.className = "editor";
            let is = document.createElement('i');
            is.className = 'checked';

            div.append(img);
            div.append(span);
            div.append(input);
            div.append(is);

            // html.appendChild(div);
            folders.appendChild(div);
        });
        // folders.appendChild(html);
        console.timeEnd('计时器');
        
    }
}

render(0);