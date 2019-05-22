//未来会加点东西？？
create.onclick = function(){
    // folders.innerHTML = '';
    fempty.style.display = 'none';

    let div = document.createElement('div');
    div.className = 'file-item';
    let img = document.createElement('img');
    img.src = 'img/folder-b.png';
    
    
    let input = document.createElement('input');
    input.className = "editor";
    input.value = '新建文件夹';
    let is = document.createElement('i');

    div.append(img);
    div.append(input);
    div.append(is);

    folders.appendChild(div);
    input.style.display = 'block';
    input.select();

    input.onblur = function(){
        let v = this.value;
        //同级所有数据
        let ary = getChild(globalId);
        // console.log(globalId);
        //如果为true说明重命名
        let resault = ary.some(item => item.title === v);
        let id = +new Date;
        if(!resault){
            //没有重命名
            data[id] = {
                title:v,
                id,
                pid:globalId,
                checked:false
            }
        }else{
            //重命名
            let v2 = v;
            let num = 0;
            while(resault){
                v2 = v2.replace(/\(\d+\)/,'') + `(${++num})`;
                resault = ary.some(item=>item.title === v2);
            }
            // console.log(v2);
            data[id] = {
                title:v2,
                id,
                pid:globalId,
                checked:false
            }
        }

        console.log('全局那个'+globalId)
        render(globalId);
        renderTree(0);
        fullbox ('新建文件夹成功');
    }

}