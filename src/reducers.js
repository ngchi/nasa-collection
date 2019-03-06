import { combineReducers } from 'redux'
import searchReducer from './containers/Search/reducer'
import homeReducer from './containers/Home/reducer'

const reducers = combineReducers({
  searchList: searchReducer,
  selectedArts: homeReducer
})

export default reducers