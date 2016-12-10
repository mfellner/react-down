import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

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

export default [syntax]
