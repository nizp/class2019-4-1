rename.onclick = function(){
    let ary = getChild(globalId);
    let arr = ary.filter(item=>item.checked);
    let len = arr.length;
    if(len!==1){
        fullbox('请选择一个文件');
    }else{
        let is = folders.querySelector('i[class="checked"]');
        let input = is.previousElementSibling;
        // console.log(is);
        let span = input.previousElementSibling;

        input.style.display = 'block';
        span.style.display = 'none';
        input.select();

        /*
            [{id:0},{id:1},{id:2}]
        */
        input.onblur = function(){
            let v = this.value.trim();
            //如果修改的名字和数据的名字一样，说明没有修改
            if(v === arr[0].title)return;
            if(!v){
                fullbox ('请输入文件名');
                return;
            };
            let id = arr[0].id;
            //同级所有数据,并且排除选中数据
            let ary = getChild(globalId).filter(el=>el.id !== id);

            //如果为true说明重命名
            let resault = ary.some(item => item.title === v);
            
            if(!resault){
                //没有重命名
                data[id].title = v;
            }else{
                //重命名
                let v2 = v;
                let num = 0;
                while(resault){
                    v2 = v2.replace(/\(\d+\)/,'') + `(${++num})`;
                    resault = ary.some(item=>item.title === v2);
                }
                // console.log(v2);
                data[id].title = v2;
            }
            // console.log('全局那个'+globalId)
            render(globalId);
            renderTree(0);
            fullbox ('重命名成功');
        }
        // console.log(is);
    }
}

