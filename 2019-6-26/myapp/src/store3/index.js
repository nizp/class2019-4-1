import {createStore,bindActionCreators} from 'redux';
import reducer from './reducer';
// import * as actionCreateor from './action'; 
const store = createStore(reducer);
// const actionCreators = bindActionCreators(actionCreateor,store.dispatch);
// export {actionCreators}
export default store;