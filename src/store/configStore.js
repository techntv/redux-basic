import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger());

export default function configStore(initialState){
  return createStore(rootReducer,initialState,middleware)
}
