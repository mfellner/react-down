import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

function syntax(type, props, children) {
  if (type === 'code') {
    console.log(type, props)
    return React.createElement(SyntaxHighlighter, props, children)
  }
}

export default [syntax]
