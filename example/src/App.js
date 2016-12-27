import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import plugins from './plugins'
import TextArea from './TextArea'
import ReactDown from '../../'
import { Page, Row, Column } from 'hedron'

const Title = styled.h1`
  color: #883DAA;
  font-family: "Helvetica Neue", sans;
  margin-bottom: 0;
`

const Wrapper = styled.div`
  h1 {
    margin: 0;
  }

  li p {
    margin: 0.25em;
  }
`

export default class App extends Component {
  static propTypes = {
    defaultText: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      src: this.props.defaultText
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
          <TextArea
            defaultText={this.props.defaultText}
            onChanged={this.onTextChanged.bind(this)}/>
        </Column>
        <Column sm={12} md={6}>
          <Wrapper>
            <ReactDown src={this.state.src} plugins={plugins}/>
          </Wrapper>
        </Column>
      </Row>
    </Page>
  }
}
