# react-down
[![npm version](https://badge.fury.io/js/react-down.svg)](https://badge.fury.io/js/react-down)
[![Build Status](https://travis-ci.org/mfellner/react-down.svg?branch=master)](https://travis-ci.org/mfellner/react-down)
[![Coverage Status](https://coveralls.io/repos/github/mfellner/react-down/badge.svg?branch=master)](https://coveralls.io/github/mfellner/react-down?branch=master)

Transform Markdown to ReactElements.

### Usage

```javascript
import ReactDown, { transform } from 'react-down'
import ReactDOM from 'react-dom'

const src = `# Hello, Markdown!
This is an *example*.`

const main = document.getElementById('main')

// Using the React component:
ReactDOM.render(<ReactDown src={src}/>, main)

// Using the transform function:
ReactDOM.render(transform(src), main)
```

### Plugins

```javascript
import React from 'react'
import ReactDown, { combinePlugins, transform } from ' react-down'

function myPlugin(type, props, children) {
  if (type === 'h1') {
    return React.createElement('div', null, children)
  }
}

const main = document.getElementById('main')

// Using the React component:
ReactDOM.render(<ReactDown src="..." plugins={[myPlugin]}/>, main)

// Using the transform function:
const myTransform = combinePlugins(myPlugin, /*, ... */)(transform)
ReactDOM.render(myTransform(src), main)
```
