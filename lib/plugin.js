import React from 'react'

function makeContinuation(createElement) {
  return next => (type, props, children, token) => {
    const element = createElement(type, props, children, token)
    return element ? element : next(type, props, children, token)
  }
}

function reactCreateElement(type, props, children) {
  return React.createElement(type, props, children)
}

export default function combinePlugins(...plugins) {
  const createElement = plugins
    .map(makeContinuation)
    .reduce((createElement, continuation) => continuation(createElement), reactCreateElement)

  return transform => src => transform(src, createElement)
}
