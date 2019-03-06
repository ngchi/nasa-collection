import React from 'react'
import { ReactComponent as Add } from '@/assets/images/add.svg'
import { ReactComponent as Play } from '@/assets/images/play.svg'
import moment from 'moment'

const SearchList = ({ articles, handleShowModal }) => {
  const list = articles.length > 0 ? articles.map((article) => {
    const linkImg = article.links && article.links.length && article.links[0].href ? article.links[0].href : null
    article = article.data[0]
    return (
    <div className="block__news" key={article.nasa_id}>
      <div className="block__news-thumbnails">
        <img src={`${linkImg}`} alt={article.title} />
        <div className="play__video">
            <Play/>
          </div>
      </div>
      <div className ="block__news-info">
        <div className="address__info">
          <span className="address__info-city">{article.location ? article.location : null}</span>
          <span className="address__info-date">{moment(article.date_created).format('YYYY-MM-DD')}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="action">
          <button className="action__button-add" onClick={() => handleShowModal({
            ...article,
            linkImg
          })}>
            <Add width="20px" height="20px"/>
            Add to collection
          </button>
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

export default SearchList