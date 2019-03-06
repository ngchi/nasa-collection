import { Component } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('root')

export default class ModalLayout extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    )
  }
}
