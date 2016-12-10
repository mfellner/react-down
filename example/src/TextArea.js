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
    text: PropTypes.string,
    onChanged: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  onInputChanged(e) {
    this.setState({text: e.target.value})
    if (this.props.onChanged) {
      this.props.onChanged(e.target.value)
    }
  }

  render() {
    const props = {ref: node => this.node = node}
    return <TextBox
      rows={10}
      value={this.state.text}
      onChange={this.onInputChanged.bind(this)}/>
  }
}
