import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

const TextBox = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  height: auto;
  font-family: monospace;
  font-size: 1.25em;
`

export default class TextArea extends Component {
  static propTypes = {
    defaultText: PropTypes.string,
    rows: PropTypes.number,
    onChanged: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.defaultText || ''
    }
  }

  onInputChanged(e) {
    this.setState({text: e.target.value})
    if (this.props.onChanged) {
      this.props.onChanged(e.target.value)
    }
  }

  render() {
    const style = {resize: this.props.rows ? 'vertical' : 'none'}
    return <TextBox
      style={style}
      rows={this.props.rows || (() => this.state.text.split('\n').length)()}
      value={this.state.text}
      onChange={this.onInputChanged.bind(this)}/>
  }
}
