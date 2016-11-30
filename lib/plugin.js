import React from 'react'

function makeContinuation(createElement) {
  return next => (type, props, children) => {
    const element = createElement(type, props, children)
    return element ? element : next(type, props, children)
  }
}

export default function combinePlugins(...plugins) {
  const createElement = plugins
    .map(makeContinuation)
    .reduce((createElement, continuation) => continuation(createElement), React.createElement)

  return transform => src => transform(src, createElement)
}
