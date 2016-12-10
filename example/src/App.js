import React, { Component } from 'react'
import styled from 'styled-components'
import plugins from './plugins'
import TextArea from './TextArea'
import ReactDown from '../../lib'
import { Page, Row, Column } from 'hedron'

const DEFAULT_TEXT = `# Hello, react-down!

*This* is **markdown**.

~~~javascript
function() {
  console.log('what is code')
}
~~~
`

const Title = styled.h1`
  color: #883DAA;
  font-family: "Helvetica Neue", sans;
`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: DEFAULT_TEXT
    }
  }

  onTextChanged(text) {
    this.setState({src: text})
  }

  render() {
    return <Page>
      <Row>
        <Column sm={12} md={12}>
          <Title>react-down ⚛ ⬇</Title>
        </Column>
      </Row>
      <Row>
        <Column sm={12} md={6}>
          <TextArea text={DEFAULT_TEXT} onChanged={this.onTextChanged.bind(this)}/>
        </Column>
        <Column sm={12} md={6}>
          <ReactDown src={this.state.src} plugins={plugins}/>
        </Column>
      </Row>
    </Page>
  }
}
