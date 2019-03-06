import * as types from './constants'

/**
 * Add new article to list of selected articles
 * 
 * @return {object} an action object with a type of RECEIVE_NEW_ARTICLE
 */
export const addArticle = (newArticle) => ({
  type: types.RECEIVE_NEW_ARTICLE,
  newArticle
})

/**
 * Edit an article in list of selected articles
 * 
 * @return {object} an action object with a type of EDIT_ARTICLE
 */
export const editArticle = (editInfo) => ({
  type: types.EDIT_ARTICLE,
  editInfo
})

/**
 * Delete an article from list of selected articles
 * 
 * @return {object} an action object with a type of REMOVE_ARTICLE
 */
export const delArticle = (nasaId) => ({
  type: types.REMOVE_ARTICLE,
  nasaId
})

/**
 * Change favorite state of one article
 * 
 * @return {object} an action object with a type of CHANGE_FAV
 */
export const changeFav = (nasaId) => ({
  type: types.CHANGE_FAV,
  nasaId
})