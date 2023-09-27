import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reduxLoop from 'redux-loop';
import rootReducer from './reducers';


const middleware = [thunk];

const storageState = {
  loader:"",
  login:"",
  sitePage:"",
};

const enhancer = compose(
  applyMiddleware(...middleware),
  reduxLoop.install(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, storageState, enhancer );

export default store;