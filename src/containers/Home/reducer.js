import * as types from './constants'
import { loadState } from '@/localStorage'

// Load selected articles from local storage
const persistedState = loadState()

const initialState = {
  articles: [],
  ...persistedState
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_NEW_ARTICLE:
      // If article is NOT duplicated, add to selected list
      let index = state.articles.findIndex(itm => itm.nasa_id === action.newArticle.nasa_id)
      if (index === -1) {
        return {
          ...state,
          articles: [...state.articles, action.newArticle]
        }
      }
      // else don't add it
      return {...state}
    case types.EDIT_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((itm) => {
          // stop if not item being clicked
          if(itm.nasa_id !== action.editInfo.nasa_id) { return itm }
          // else edit it
          return {
            ...itm,
            ...action.editInfo
          }
        })
      }
    case types.REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((itm) => itm.nasa_id !== action.nasaId)
      }
    case types.CHANGE_FAV:
      return {
        ...state,
        articles: state.articles.map((itm) => {
          // stop if not item being clicked
          if(itm.nasa_id !== action.nasaId) { return itm }
          // else change fav of it
          return {
            ...itm,
            isFav: !itm.isFav
          }
        })
      }
    default:
      return state
  }
}

export default homeReducer