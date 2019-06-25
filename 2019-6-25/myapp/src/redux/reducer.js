export default function reducer(state={num:0},action){
    let {type} = action;
    const obj = JSON.parse(JSON.stringify(state));
    switch (type) {
        case'ADD_NUM':
            obj.num = obj.num + 1;
            console.log(obj.num);
            return obj;

        case'DELE_NUM':
            obj.num = obj.num - 1;
            return obj;
        default:
            return obj;
    }

}