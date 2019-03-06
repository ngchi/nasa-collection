import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as Close } from '@/assets/images/close.svg'
import { ReactComponent as Check } from '@/assets/images/check.svg'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frmInfo: {
        title: '',
        description: '',
        media_type: '',
        linkImg: '',
        isFav: false,
        ...this.props.info
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.info !== prevProps.info) {
      this.setState({
        ...this.state,
        frmInfo: {
          ...this.state.frmInfo,
          ...prevProps.info
        }
      })
    }
  }

  handleSaveButton(e) {
    // validation
    if(!this.state.frmInfo.title.length || !this.state.frmInfo.description.length) {
      alert('Check again your from!')
      e.preventDefault()
      return
    }
    // case add new
    if(this.props.type === 'add') {
      this.props.addArticle(this.state.frmInfo)
      this.props.handleClose()
    } else {
    // case edit
      this.props.editArticle(this.state.frmInfo)
      this.props.handleClose()
    }
  }

  handleTitle(e) {
    this.setState({
      ...this.state,
      frmInfo: {
        ...this.state.frmInfo,
        title: e.target.value
      }
    })
  }

  handleDesc(e) {
    this.setState({
      ...this.state,
      frmInfo: {
        ...this.state.frmInfo,
        description: e.target.value
      }
    })
  }

  render() {
    const typeModal = this.props.type === 'add' ? 'Add to collection' : 'Edit'
    const saveTxt = this.props.type === 'add' ? 'Add to collection' : 'Save'
    return (
      <div>
        <div className="modal-backdrop">
          {this.props.children}
        </div>
        <div className="modal" onClick={this.props.handleClose}>
          <div className="modal__dialog" onClick={e => e.stopPropagation()}>
            <div className="modal__content">
              <div className="modal__header">
                <h5 className="modal__ttl">{typeModal}</h5>
                <button className="modal__close" onClick={this.props.handleClose}>
                  <Close fill="gold" />
                </button>
              </div>
              {/* END: MODAL HEADER */}
              <div className="modal__body">
                <div className="form">
                  <form>
                    <div className="form__group">
                      <input type="text" className="form__control" placeholder="Title" value={this.state.frmInfo.title} onChange={(e) => this.handleTitle(e)} />
                      {this.state.frmInfo.title.length === 0 &&
                        <div className="form__err">This input must not be empty.</div>
                      }
                    </div>
                    <div className="form__group">
                      <textarea type="text" className="form__control" placeholder="Description" value={this.state.frmInfo.description} onChange={(e) => this.handleDesc(e)}  />
                      {this.state.frmInfo.description.length === 0 &&
                        <div className="form__err">This input must not be empty.</div>
                      }
                    </div>
                    <div className="form__group">
                      <input type="text" className="form__control" placeholder="Type" disabled defaultValue={this.state.frmInfo.media_type} />
                    </div>
                    <div className="form__group">
                      <input type="text" className="form__control" placeholder="Link preview image url *" disabled defaultValue={this.state.frmInfo.linkImg} />
                    </div>
                    <div className="form__group">
                      <input type="text" className="form__control" placeholder="Link file url *" disabled />
                    </div>
                  </form>
                </div>                
              </div>
              {/* END: MODAL BODY */}
              <div className="modal__footer">
                <Link to="/" className="collection__list-add" title="Add to collection" onClick={(e) => this.handleSaveButton(e)}>
                  <Check width="13px" height="13px"/>
                  {saveTxt}
                </Link>
              </div>
              {/* END: MODAL FOOTER */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
