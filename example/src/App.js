import React, { Component } from 'react'
import ReactDown from 'react-down'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const TextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  height: auto;
`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: '# Hello, react-down!\n\n*This* is **markdown**.\n'
    }
  }

  onInputChanged(e) {
    this.setState({src: e.target.value})
  }

  render() {
    return <Page>
      <Row>
        <Column sm={12} md={12}>
          <h1>react-down</h1>
        </Column>
      </Row>
      <Row>
        <Column sm={12} md={6}>
          <TextArea
            rows={10}
            value={this.state.src}
            onChange={this.onInputChanged.bind(this)}/>
        </Column>
        <Column sm={12} md={6}>
          <ReactDown src={this.state.src}/>
        </Column>
      </Row>
    </Page>
  }
}
