import {createStore, applyMiddleware} from 'redux'
import ReduxtThunk from 'redux-thunk'

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; //NOTE: For Dev only

import reducer from './reducer';
const middlewares = [logger, ReduxtThunk];

export default  createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export default function configureStore(initialState){
//     return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
// };