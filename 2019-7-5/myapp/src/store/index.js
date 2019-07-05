import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer_yun from './reducer/reducer';
import reducer_user from './reducer/reducer_user';

const reducers = combineReducers({
    reducer_yun,
    reducer_user
});

export default createStore(reducers,applyMiddleware(thunk,logger));

