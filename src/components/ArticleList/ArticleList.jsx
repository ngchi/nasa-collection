import React from 'react'
import moment from 'moment'
import { ReactComponent as Fav } from '@/assets/images/heart.svg'
import { ReactComponent as FavFill } from '@/assets/images/heart-filled.svg'
import { ReactComponent as Delete } from '@/assets/images/trash-bin.svg'
import { ReactComponent as Edit } from '@/assets/images/pen.svg'
import { ReactComponent as Play } from '@/assets/images/play.svg'

const ArticleList = ({ articles, handleShowModal, delArticle, changeFav }) => {
  const delArticleHandler = (nasaId, delArticleFunc) => {
    const answer = window.confirm('Are you sure to delete this NASA item?')
    if(!answer) { return }
    delArticleFunc(nasaId)
  }
  const list = articles.length > 0 ? articles.map((article) => {
    const activeFav = article.isFav ? <FavFill className="action__button-fav-fill" /> : <Fav className="action__button-fav" />
    return (
      <div className="block__news" key={article.nasa_id}>
        <div className="block__news-thumbnails">
          <img src={article.linkImg} alt={article.title} />
          <div className="play__video">
            <Play/>
          </div>
        </div>
        <div className ="block__news-info">
          <div className="address__info">
            <span className="address__info-city">{article.location}</span>
            <span className="address__info-date">{moment(article.date_created).format('YYYY-MM-DD')}</span>
          </div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <div className="action">
            <button className="action__button favorite" onClick={() => changeFav(article.nasa_id)}>{activeFav}</button>
            <button className="action__button delete" onClick={() => delArticleHandler(article.nasa_id, delArticle)}><Delete/></button>
            <button className="action__button edit" onClick={() => handleShowModal(article)}><Edit/></button>
          </div>
        </div>
      </div>
    )}) : null

  return (
    <div className="collection__list-items">
      {list}
    </div>
  )
}

export default ArticleList