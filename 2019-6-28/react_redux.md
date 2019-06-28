# react-redux


使用方法：


- 安装  npm i react-redux -S

- 在最外层的组件
    - 引入provider  import {Provider} from 'react-redux'

    - Provider 作为标签  放到顶层组件上

    ```
    //生产，根组件,store 就是传递的数据
    <Provider store={store}>
        <App />
    </Provider> 
    ```
    
- 在子组件中
    - 引入  import {connect} from 'react-redux'
    - 引入所有定义的事件  import * as actions from './actions'
    - 导出 export default connect(mapStateToProps,mapDispatchToProps)(App)
        - connect()的两个参数，都是函数，里面必须返回对象。
        - 第一个参数是映射state的，是标配。
        - 第二个参数可以写可以不写，可以传函数也可以直接把事件传入
        ```
        function mapStateToProps(state){
            return state  
            //或者返回过滤数据
            return {num:state.num}
            
        }
        
        //这里可以不传
        //function mapDispatchToProps(dispatch){
           // return bindActionCreators(actions,dispatch)
        // }
        //export default connect(mapStateToProps,mapDispatchToProps)(App)
        
        //直接传actions就可以
        export default connect(mapStateToProps,actions)(App)
        
        ```


- 获取传递的数据   this.props获取