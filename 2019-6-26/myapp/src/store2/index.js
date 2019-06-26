import {createStore,bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actionCreateors from './action'; 
const store = createStore(reducer);
const actionCreators = bindActionCreators(actionCreateors,store.dispatch);
export {actionCreators}
export default store;