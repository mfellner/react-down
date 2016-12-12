import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'

function syntax(type, props, children, token) {
  if (type === 'code') {
    return React.createElement(
      SyntaxHighlighter,
      Object.assign(props, {
        language: token.info,
        showLineNumbers: true
      }),
      children
    )
  }
}

const BlockQuote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 0;
  padding: 0.5em 10px;
  quotes: "\\201C""\\201D""\\2018""\\2019";

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  & p {
    display: inline;
  }
`

function blockquote(type, props, children, token) {
  if (type === 'blockquote') {
    return React.createElement(BlockQuote, props, children)
  }
}

export default [syntax, blockquote]
