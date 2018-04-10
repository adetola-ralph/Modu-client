
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

// eslint-disable-next-line
const logger = store => next => (action) => {
  if (typeof action !== 'function') {
    // eslint-disable-next-line
    console.log('dispatching ... ', action);
  }
  return next(action);
};

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(logger, thunk, reduxImmutableStateInvariant())),
  );
}
