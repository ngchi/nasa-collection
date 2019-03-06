import React from 'react'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import { ReactComponent as Add } from '@/assets/images/add.svg'

import Modal from '@/components/Modal/Modal.jsx'
import ModalLayout from '@/components/Modal/ModalLayout.jsx'
import ArticleList from '@/components/ArticleList/ArticleList.jsx'

import * as actions from './actions'
import * as select from './selectors'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    const { editArticle, delArticle, changeFav } = this.props
    const modal = this.state.showModal ? (
      <ModalLayout>
        <Modal handleClose={this.handleShowModal} type='edit' info={this.state.info} editArticle={editArticle} />
      </ModalLayout>
    ) : null
    const { articles } = this.props

    return (
      <div className="container collection__list">
        {modal}
        <h1>NASA Collection</h1>
        <Link to="/nasa-search" className="collection__list-add" title="Add new item" >
          <Add width="13px" height="13px"/>
          Add new item
        </Link>
        <ArticleList
          articles={articles} 
          handleShowModal={this.handleShowModal} 
          delArticle={delArticle} 
          changeFav={changeFav}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: select.getArticles(state)
})

Home = withRouter(connect(
  mapStateToProps,
  actions
)(Home))

export default Home
