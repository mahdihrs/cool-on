import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import githubLib from './reducers';

const logger1 = store => next => action => {
  console.log('1 dispatching ', action)
  next(action)
  console.log('1 new state', store.getState())
}

const logger2 = store => next => action => {
  console.log('2 dispatching ', action)
  next(action)
  console.log('2 new state', store.getState())
}

const store = createStore (
  combineReducers({
      // reducers
      githubLib
  }), applyMiddleware(thunk)
)

export default store;