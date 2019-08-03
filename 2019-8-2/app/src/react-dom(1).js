
let ReactDOM = (function(){
    /*
        element:{type,props}

        type:'div'|function|class

        parent:document.getElementById('root')
    */
    function render(element,parent){
        let type = element.type;
        let props = element.props; //props:{id,class,children}

        /*
            element  string|function|class
        */

        //如果element为字符串，就把字符串插入到父级中
        if(typeof element === 'string'){
            parent.appendChild(document.createTextNode(element));
            return;
        }


        let doElement = document.createElement(type);;
        

        for(let attr in props){
            if(attr === 'class'){
                doElement.className = props[attr];
            }else if(attr === 'children'){
                props[attr].forEach(item=>{
                    render(item,doElement);
                });

            }else if(attr === 'style'){
                // for(let key2 in props[attr]){
                //     doElement.style[key2] = props[attr][key2];
                // }
                /*
                    doElement.style.cssText = 'width:100px;height:100px;';
                */
                let styleObj = props[attr];
                //['width','height','fontSize']  font-size
                
                doElement.style.cssText = Object.keys(styleObj).map(item=>{
                    return item.replace(/([A-Z])/,($0,$1)=>{
                        return '-' + $1.toLowerCase();
                    })+':'+ styleObj[item]
                }).join(';');


            }else{
                //<div id="box">
                doElement.setAttribute(attr,props[attr]);
            }
        }

        parent.appendChild(doElement);
    }
    return {
        render
    }
})()



export default ReactDOM;