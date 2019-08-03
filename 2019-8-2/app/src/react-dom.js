export default (function(){
    function render(element,parent){
       
        if(typeof element === 'string' || typeof element === 'number'){
            parent.appendChild(document.createTextNode(element));
            return;
        }
        
        let type = element.type;
        let props = element.props;

      
        if(type.isComponent){
            let fnEle = new type(props).render();
            type = fnEle.type;
            props = fnEle.props;
            // console.log(fnEle)
        }else if(typeof type === 'function'){
           
            let fnEle = type(props);
            type = fnEle.type;
            props = fnEle.props;
            
        }


        let docElement = document.createElement(type);

        for(let attr in props){
            if(attr === 'class'){
                docElement.className = props[attr];
            }else if(attr === 'style'){
                // ['width','fontSize']
                //width:100px;height:200px
                docElement.style.cssText = Object.keys(props[attr]).map(item=>{
                    return item.replace(/([A-Z])/,($0,$1)=>'-'+$1.toLowerCase()) + ':' + props[attr][item]
                }).join(';')
            }else if(attr === 'children'){
                if(props[attr].length){
                    props[attr].forEach(item=>render(item,docElement));
                }
            }else{
                docElement.setAttribute(attr,props[attr]);
            }
        }
        parent.appendChild(docElement);

    }
    return {
        render
    }
})();