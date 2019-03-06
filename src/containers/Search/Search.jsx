import React from 'react'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import { ReactComponent as Back } from '@/assets/images/back.svg'
import { ReactComponent as LoadingIndicator } from '@/assets/images/loading.svg'

import Modal from '@/components/Modal/Modal.jsx'
import ModalLayout from '@/components/Modal/ModalLayout.jsx'

import { addArticle } from '../Home/actions'
import * as actions from './actions'
import * as select from './selectors'

import SeachList from '@/components/SearchList/SearchList.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      showModal: false,
      info: {}
    }

    this.handleShowModal = this.handleShowModal.bind(this)
  }

  handleShowModal(info) {
    // close modal if showed
    if(this.state.showModal) {
      this.setState({ showModal: false, info: {} })
    } else {
      // else open modal
      this.setState({ showModal: true, info })
    }
  }

  handleSearch (e) {
    this.setState({
      text: e.target.value
    })
  }

  keyUpHandler (e, loadArticles, saveInputKeystroke) {
    // If user press Enter 
    if(e.keyCode === 13) {
      // if user don't type anything, alert
      if(e.target.value.length === 0) {
        alert('You must type something!')
        return
      }
      // else loading data
      loadArticles(this.state.text)
      saveInputKeystroke(this.state.text)
    }
  }

  render() {
    const { isLoading, articles, error, loadArticles, addArticle, saveInputKeystroke, text } = this.props
    const modal = this.state.showModal ? (
      <ModalLayout>
        <Modal handleClose={this.handleShowModal} type='add' info={this.state.info} addArticle={addArticle} />
      </ModalLayout>
    ) : null
    return (
      <div className="container search">
        {modal}
        <div className="search__list-back">
          <Link to="/" title="Back to Collection" >
            <Back width="12px" height="12px"/>
            Back to Collection
          </Link>
        </div>
        <h2>Search from NASA</h2>
        <input 
          type="input" 
          placeholder="Type something to search" 
          onChange={(e) => this.handleSearch(e)}
          onKeyUp={(e) => this.keyUpHandler(e, loadArticles, saveInputKeystroke)}
          value={this.state.text}
          className="search__ip"
        />
        {/* SEARCH INPUT */}
        {isLoading && <LoadingIndicator />}
        {/* LOADING INCIDCATOR */}
        {!isLoading && articles.length > 0 &&
          <div className="search__list-result">
            <div className="search__list-keywords">
              <span className="result">{articles.length} result for "{text}"</span>
            </div>
            <SeachList articles={articles} handleShowModal={this.handleShowModal} />
          </div>
        }
        {/* SEARCH RESULT */}
        {!isLoading && articles.length === 0 && error.length === 0 &&
          <div className="search__list-result">
            <div className="search__list-keywords">
              <span className="result">{articles.length} result for "{text}"</span>
            </div>
          </div>
        }
        {/* RESULTS WHEN NO DATA */}
        {!isLoading && articles.length === 0 && error.length > 0 &&
          <div className="search__list-result">
            <div className="search__list-keywords">
              <span className="result">{error}</span>
            </div>
          </div>
        }
        {/* NETWORK ERROR */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: select.getIsLoading(state),
  articles: select.getArticles(state),
  error: select.getError(state),
  text: select.getText(state)
})

Search = withRouter(connect(
  mapStateToProps,
  {
    ...actions,
    addArticle
  }
)(Search))

export default Search
