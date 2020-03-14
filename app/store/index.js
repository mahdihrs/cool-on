import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers


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
      
  }), applyMiddleware(thunk)
)

export default store;