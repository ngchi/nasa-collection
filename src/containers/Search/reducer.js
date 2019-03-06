import * as types from './constants'

const initialState = {
  articles: [],
  isLoading: false,
  error: '',
  text: ''
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_ARTICLES:
      return {
        ...state,
        isLoading: false,
        articles: action.articles
      }
    case types.RECEIVE_ERRORS:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case types.RECEIVE_SEARCH_TERM:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

export default appReducer