import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import { saveState } from './localStorage'
import throttle from 'lodash/throttle'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add Chrome Redux Devtool

const configureStore = () => {
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  store.subscribe(throttle(() => {
    saveState(store.getState().selectedArts) // Just save selected Articles to local storage
  }, 1000))

  return store
}

export default configureStore