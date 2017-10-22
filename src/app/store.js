import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import landingReducer from '../redux/reducers/landingReducer';
import userReducer from '../redux/reducers/userReducer';
import jobReducer from '../redux/reducers/jobReducer';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    landingReducer,
    userReducer,
    jobReducer,
    routing: routerReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      ),
    ),
  );

  return store;
}
