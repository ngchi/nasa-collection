import * as types from './constants'
import api from '@/utils/api'

/**
 * Load the articles
 * 
 * @return {object} an action object with a type of RECEIVE_ARTICLES
 */
export const loadArticles = (query) => (dispatch) => {
  // Dispatch Empty Network Error
  dispatch({
    type: types.RECEIVE_ERRORS,
    error: ''
  })

  // Dispatch Loading state
  dispatch({
    type: types.IS_LOADING
  })

  // Calling api
  return api.get({
    url: "https://images-api.nasa.gov/search",
    data: {
      q: query
    }
  }).then((response) => {
    if(response && response.collection && response.collection.items) {
      // Dispatch response data
      dispatch({
        type: types.RECEIVE_ARTICLES,
        articles: response.collection.items
      })
    }
  }
  ).catch(err => {
    console.log(err)
    dispatch({
      type: types.RECEIVE_ARTICLES,
      articles: []
    })
    dispatch({
      type: types.RECEIVE_ERRORS,
      error: err.toString()
    })
  })
}

/**
 * Save search input into store
 * 
 * @return {object} an action object with a type of RECEIVE_SEARCH_TERM
 */
export const saveInputKeystroke = (text) => ({
  type: types.RECEIVE_SEARCH_TERM,
  text
})