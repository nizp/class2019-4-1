const React = (function(){
    console.time('计时器')
    function createElement(type,attrs,...children){
        let props = {};
        for(let key in attrs){
            props[key] = attrs[key];
        }
        props.children = children;

        return element(type,props);
    }
    function element(type,props){
        return {type,props}
    }
    console.timeEnd('计时器')
    return {
        createElement,
        element
    }
})();

export default React;

class Component {
    static isComponent = true;
    constructor(props) {
        this.props = props;
    }
}
export {Component}


